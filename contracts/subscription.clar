;; Subscription contract for managing sBTC subscriptions
;; Allows users to create, manage, and cancel subscriptions

(define-constant CONTRACT_OWNER tx-sender)
(define-constant ERR_NOT_AUTHORIZED (err u1001))
(define-constant ERR_INSUFFICIENT_BALANCE (err u1002))
(define-constant ERR_SUBSCRIPTION_NOT_FOUND (err u1003))
(define-constant ERR_INVALID_AMOUNT (err u1004))

;; Define subscription structure
(define-data-var subscriptions
  {id: uint, creator: principal, subscriber: principal, amount: uint, interval: uint, start-block: uint, end-block: uint}
  (list 100))

;; Define payment structure
(define-data-var payments
  {subscription-id: uint, amount: uint, block-height: uint}
  (list 1000))

;; Create a new subscription
(define-public (create-subscription (creator principal) (amount uint) (interval uint) (duration uint))
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_NOT_AUTHORIZED)
    (asserts! (> amount u0) ERR_INVALID_AMOUNT)
    (let ((subscription-id (len (var-get subscriptions))))
      (var-set subscriptions
        (append (var-get subscriptions)
          (list {
            id: subscription-id,
            creator: creator,
            subscriber: tx-sender,
            amount: amount,
            interval: interval,
            start-block: block-height,
            end-block: (+ block-height duration)
          })))
      (ok subscription-id))))

;; Process a subscription payment
(define-public (process-payment (subscription-id uint))
  (let ((subscription (get-subscription subscription-id)))
    (asserts! (is-some subscription) ERR_SUBSCRIPTION_NOT_FOUND)
    (let ((sub (unwrap-panic subscription)))
      (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_NOT_AUTHORIZED)
      (asserts! (>= block-height (get-next-payment-block sub)) ERR_INVALID_AMOUNT)
      (var-set payments
        (append (var-get payments)
          (list {
            subscription-id: subscription-id,
            amount: (get amount sub),
            block-height: block-height
          })))
      (ok true))))

;; Cancel a subscription
(define-public (cancel-subscription (subscription-id uint))
  (let ((subscription (get-subscription subscription-id)))
    (asserts! (is-some subscription) ERR_SUBSCRIPTION_NOT_FOUND)
    (let ((sub (unwrap-panic subscription)))
      (asserts! (or (is-eq tx-sender (get subscriber sub)) (is-eq tx-sender CONTRACT_OWNER)) ERR_NOT_AUTHORIZED)
      (var-set subscriptions
        (filter (var-get subscriptions)
          (fn (s) (not (is-eq (get id s) subscription-id)))))
      (ok true))))

;; Helper functions
(define-private (get-subscription (id uint))
  (find (var-get subscriptions)
    (fn (s) (is-eq (get id s) id))))

(define-private (get-next-payment-block (subscription {id: uint, creator: principal, subscriber: principal, amount: uint, interval: uint, start-block: uint, end-block: uint}))
  (let ((last-payment (get-last-payment (get id subscription))))
    (if (is-some last-payment)
      (+ (get block-height (unwrap-panic last-payment)) (get interval subscription))
      (get start-block subscription))))

(define-private (get-last-payment (subscription-id uint))
  (find (var-get payments)
    (fn (p) (is-eq (get subscription-id p) subscription-id)))) 