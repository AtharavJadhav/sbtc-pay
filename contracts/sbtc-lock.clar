;; sBTC Lock contract for managing locked sBTC for subscriptions
;; Allows users to lock sBTC for subscription payments

(define-constant CONTRACT_OWNER tx-sender)
(define-constant ERR_NOT_AUTHORIZED (err u2001))
(define-constant ERR_INSUFFICIENT_BALANCE (err u2002))
(define-constant ERR_LOCK_NOT_FOUND (err u2003))
(define-constant ERR_INVALID_AMOUNT (err u2004))

;; Define lock structure
(define-data-var locks
  {id: uint, owner: principal, amount: uint, start-block: uint, end-block: uint, subscription-id: uint}
  (list 100))

;; Lock sBTC for a subscription
(define-public (lock-sbtc (amount uint) (duration uint) (subscription-id uint))
  (begin
    (asserts! (> amount u0) ERR_INVALID_AMOUNT)
    (let ((lock-id (len (var-get locks))))
      (var-set locks
        (append (var-get locks)
          (list {
            id: lock-id,
            owner: tx-sender,
            amount: amount,
            start-block: block-height,
            end-block: (+ block-height duration),
            subscription-id: subscription-id
          })))
      (ok lock-id))))

;; Release locked sBTC
(define-public (release-lock (lock-id uint))
  (let ((lock (get-lock lock-id)))
    (asserts! (is-some lock) ERR_LOCK_NOT_FOUND)
    (let ((l (unwrap-panic lock)))
      (asserts! (is-eq tx-sender (get owner l)) ERR_NOT_AUTHORIZED)
      (asserts! (>= block-height (get end-block l)) ERR_INVALID_AMOUNT)
      (var-set locks
        (filter (var-get locks)
          (fn (l) (not (is-eq (get id l) lock-id)))))
      (ok true))))

;; Get lock details
(define-read-only (get-lock (id uint))
  (find (var-get locks)
    (fn (l) (is-eq (get id l) id))))

;; Get total locked amount for a subscription
(define-read-only (get-total-locked (subscription-id uint))
  (fold (var-get locks) u0
    (fn (acc lock)
      (if (is-eq (get subscription-id lock) subscription-id)
        (+ acc (get amount lock))
        acc)))) 