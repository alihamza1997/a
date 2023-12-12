import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <section className="bg-white features_section mb-16">
      <div className="bg-white pt-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl leading-10 font-bold text-gray-900">
              Made for ADHDers, <br /> by ADHDers.
            </h2>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-700 pb-8">
              The all-in-one system your brain has been crying out for. Everything in one place, with no distractions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Task Card 1 */}
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                <img loading="lazy" className="w-10 h-10" src="https://img.icons8.com/ios-filled/50/planner.png" alt="Planner" />
              </div>
              <div className="pt-5 text-lg font-semibold text-black">Seamless Organisation</div>
              <p className="pt-1 text-gray-700 text-center">No more distractions. Set tasks, reminders, deadlines, schedules all in one place.</p>
            </div>

            {/* Task Card 2 */}
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                <img loading="lazy" style={{ display: 'block' }} className="w-12 h-12" src="https://img.icons8.com/glyph-neue/64/artificial-intelligence.png" alt="Business Automation Icon" />
              </div>
              <div className="pt-5 text-lg font-medium text-black">Built-in AI</div>
              <p className="pt-1 text-gray-700 text-center">Transform notes into essay plans, summarise lecture topics, and more with Notion AI!</p>
            </div>

            {/* Task Card 3 */}
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                <img loading="lazy" style={{ display: 'block' }} className="w-10 h-10" src="https://img.icons8.com/ios-glyphs/30/graduation-cap--v1.png" alt="Business Automation Icon" />
              </div>
              <div className="pt-5 text-lg font-medium text-black">Easy Tutorials</div>
              <p className="pt-1 text-gray-700 text-center"> Notion beginners can ease into this system with full how-to videos on every page.</p>
            </div>

            {/* Task Card 4 */}
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                <img loading="lazy" style={{ display: 'block' }} className="w-10 h-10" src="https://img.icons8.com/ios-filled/50/paint-brush.png" alt="Business Automation Icon" />
              </div>
              <div className="pt-5 text-lg font-medium text-black">Full Customization</div>
              <p className="pt-1 text-gray-700 text-center">Like Notion, customization is easy. Change colors, icons, and layout however you like!</p>
            </div>

            {/* Task Card 5 */}
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                <img loading="lazy" style={{ display: 'block' }} className="w-10 h-10" src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/external-transfer-arrows-kmg-design-glyph-kmg-design.png" alt="Business Automation Icon" />
              </div>
              <div className="pt-5 text-lg font-medium text-black">Easy Migration</div>
              <p className="pt-1 text-gray-700 text-center">Moving from another platform is as easy as 1,2, CTRL + V ... Just Copy, Paste, and Go!</p>
            </div>

            {/* Task Card 6 */}
            <div className="p-7 max-w-sm mx-auto bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex-shrink-0">
                <img loading="lazy" style={{ display: 'block' }} className="w-10 h-10" src="https://img.icons8.com/sf-black-filled/64/opened-folder.png" alt="Business Automation Icon" />
              </div>
              <div className="pt-5 text-lg font-medium text-black">Centralized Storage</div>
              <p className="pt-1 text-gray-700 text-center">Revision Notes, Flashcards, Essay plans, and Extra Reading - all just one click away.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
