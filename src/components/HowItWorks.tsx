import React from 'react';

const HowItWorks = () => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      {/* Decorative background elements to enhance glass effect */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Glass Container */}
      <div className="relative max-w-2xl w-full p-8 rounded-3xl backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-gray-900 dark:text-gray-100 z-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">How It Works</h2>
        
        <p className="mb-6 text-lg leading-relaxed">
          Epinephrine in the EpiPen works by <strong className="font-bold text-gray-900 dark:text-white">stimulating alpha- and beta-adrenergic receptors</strong>. This action:
        </p>

        <ul className="space-y-5">
          <li className="flex items-start">
            <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-gray-800 dark:bg-gray-200 mr-4"></span>
            <span className="text-lg">
              <strong className="font-bold text-gray-900 dark:text-white">Narrows blood vessels</strong>, raising dangerously low blood pressure
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-gray-800 dark:bg-gray-200 mr-4"></span>
            <span className="text-lg">
              <strong className="font-bold text-gray-900 dark:text-white">Relaxes airway muscles</strong>, reducing swelling and improving breathing
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-gray-800 dark:bg-gray-200 mr-4"></span>
            <span className="text-lg leading-relaxed">
              <strong className="font-bold text-gray-900 dark:text-white">Slows or reverses severe symptoms</strong> of anaphylaxis, providing critical time to reach emergency medical care
              
              <span className="inline-flex items-center ml-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/20 shadow-sm backdrop-blur-md align-middle mt-1 sm:mt-0">
                <span className="w-4 h-4 mr-1.5 rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 shadow-inner flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </span>
                Drugs.com +1
              </span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;
