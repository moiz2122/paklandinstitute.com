import { CircleCheckBig, ArrowRight } from "lucide-react";

export default function EducationPricing() {
  const plans = [
    {
      title: "Full Year",
      price: "$2,350",
      badge: "Save $50",
      features: [
        "Best value for academic year",
        "Full access to all materials",
        "Dedicated support",
      ],
    },
    {
      title: "Monthly Recurring",
      price: "$200",
      subtitle: "Monthly Recurring",
      features: [
        "Flexible monthly recurring option",
        "Full access to all materials",
        "Dedicated support",
      ],
    },
    {
      title: "One-Time Payment",
      price: "$200",
      subtitle: "One Month",
      features: [
        "Make up payment per missed month",
        "Full access to all materials",
        "Dedicated support",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-teal-800 via-zinc-900 to-teal-900 pt-16 pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-4">
          Choose Your Learning Path
        </h2>
        <p className="text-lg sm:text-xl text-white text-center mb-12">
          Pay the academic year tuition in full and receive a $50 discount
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-900 via-teal-900 to-zinc-800 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 shadow-2xl flex flex-col"
            >
              <div className="px-6 sm:px-8 py-10 border-t-4 border-teal-500 flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {plan.title}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  {plan.badge && (
                    <div className="ml-4 inline-block bg-teal-500 bg-opacity-75 text-zinc-100 text-xs sm:text-sm font-bold px-3 flex-shrink-0 py-1 rounded-full">
                      {plan.badge}
                    </div>
                  )}
                  {plan.subtitle && (
                    <span className="text-lg sm:text-xl text-teal-100 ml-2">
                      {plan.subtitle}
                    </span>
                  )}
                </div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-white"
                    >
                      <CircleCheckBig className="h-5 w-5 text-teal-400 mr-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 sm:px-8 pb-8">
                <button className="w-full bg-zinc-200 text-teal-700 text-center py-3 sm:py-4 rounded-xl font-semibold duration-300 transform flex items-center justify-center text-sm sm:text-base hover:bg-zinc-100">
                  <div className="flex items-center">
                    Select Plan
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
