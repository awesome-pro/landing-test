import React from 'react';
import { Button } from './ui/button';

function Action() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Multiple gradient orbs that create a flowing effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Main center gradient */}
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        {/* Floating orbs that create flowing effect */}
        <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-blob1"></div>
        <div className="absolute w-[250px] h-[250px] bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-blob2"></div>
        <div className="absolute w-[350px] h-[350px] bg-gradient-to-r from-sky-200 to-sky-200 rounded-full blur-3xl opacity-30 animate-blob3"></div>
      </div>

      {/* Content layer */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold primary-text mb-6">
          Ready to revolutionize your CRM ?
        </h1>
        <p className="text-xl text-blue-600/60 max-w-2xl mx-auto mb-8">
          Join the elite businesses that have revolutionized their CRM with Caresept. Experience the
          power of advanced AI in transforming your customer interactions.
        </p>
        <div className="flex items-center justify-center gap-4 lg:gap-7 font-bold">
          <Button size="lg" className="primary-gradient font-bold">
            Get Started
          </Button>
          <Button
            size="lg"
            variant={'ghost'}
            className="bg-slate-50/20 hover:bg-slate-50/40 font-bold"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Action;
