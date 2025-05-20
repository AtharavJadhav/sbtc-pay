import { FC } from 'react';

const Features: FC = () => {
  const features = [
    {
      title: "Smart Contract Powered",
      description: "Automated, trustless payments through secure smart contracts",
      icon: "🔒",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Bitcoin Native",
      description: "Built on sBTC for seamless Bitcoin integration",
      icon: "₿",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "No Middlemen",
      description: "Direct peer-to-peer transactions with minimal fees",
      icon: "🤝",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="text-black text-center mb-12 max-w-2xl mx-auto">
          Experience the future of subscription payments with our innovative platform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 hover:border-indigo-200"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              <div className="relative">
                <div className="text-4xl mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                  {feature.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 