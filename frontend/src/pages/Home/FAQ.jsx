import React, { useState } from 'react';

function FAQ() {
    const data = [
        {
            question: 'Are there any cultural norms or etiquette I should be aware of?',
            answer: 'Yes, it is important to respect local customs and traditions. Dress modestly, especially in rural areas and places of worship. Always ask for permission before taking photographs of people. Handshakes are a common form of greeting, but it is respectful to wait for the other person to extend their hand first.'
        },
        {
            question: 'Is it safe to travel to Somalia?',
            answer: 'Travel to Somalia requires careful planning due to ongoing security concerns. It is highly recommended to travel with a reputable tour operator and stay informed about the current situation. Consult your government’s travel advisory for the latest information and take necessary precautions to ensure your safety.'
        },
        {
            question: 'What is the food like in Somalia?',
            answer: 'Somali cuisine is rich and diverse, featuring a blend of African, Middle Eastern, and Indian influences. Staple foods include rice, pasta, flatbreads, and a variety of meat and vegetable dishes. Popular dishes include sambusas (savory pastries), suqaar (stir-fried meat), and halwa (a sweet confection). Be prepared to enjoy flavorful and aromatic meals.'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleShow = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className='overflow-hidden blob'>
            <div className='m-8'>
                <h1 className='text-3xl font-bold text-black py-4 text-center'>FREQUENTLY ASKED QUESTIONS</h1>
                <div className='w-[560px] mx-auto'>
                    {data.map((query, index) => (
                        <div id="accordion-collapse" data-accordion="collapse" key={index}>
                            <h2 id={`accordion-collapse-heading-${index}`}>
                                <button 
                                    type="button" 
                                    onClick={() => handleShow(index)} 
                                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-slate-200 border-t-2 gap-3" 
                                    aria-expanded={activeIndex === index} 
                                    aria-controls={`accordion-collapse-body-${index}`}
                                >
                                    <span>{query.question}</span>
                                    <svg 
                                        className={`w-3 h-3 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
                                        aria-hidden="true" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 10 6"
                                    >
                                        <path 
                                            stroke="currentColor" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                </button>
                            </h2>
                            <div 
                                id={`accordion-collapse-body-${index}`} 
                                className={`${activeIndex === index ? 'block' : 'hidden'}`} 
                                aria-labelledby={`accordion-collapse-heading-${index}`}
                            >
                                <div className="p-5">
                                    <p className="mb-2 text-gray-200">{query.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default FAQ;
