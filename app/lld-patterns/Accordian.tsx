import React, { useState } from 'react';
interface AccordianItem {
    title: string;
    content: string;
}
interface AccordianProps {
    items: AccordianItem[];
    mode: 'single' | 'multiple';
}
export default function Accordian({ items, mode = "single" }: AccordianProps) {
    const [openIds, setOpenIds] = useState<string[]>([]);
    const toggle = (id: string) => {
        if (openIds.includes(id)) {
            setOpenIds(openIds.filter(openId => openId !== id))
        }
        else {
            setOpenIds(mode == "single" ? [id] : [...openIds, id]);
        }
    }
    return (
        <div className='border rounded-lg p-4'>
            {items.map((item, index) => {
                const isOpen = openIds.includes(item.title);
                return (
                    <div key={item?.title} className='mb-2'>
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={`panel-${index}`}
                            onClick={() => toggle(item.title)}
                            className='w-full flex justify-between items-center cursor-pointer text-left bg-transparent'
                        >
                            <h2 className='text-lg font-semibold'>{item.title}</h2>
                            <span>{isOpen ? '-' : '+'}</span>
                        </button>
                        {isOpen && (
                            <div id={`panel-${index}`} className='mt-2 text-gray-600'>
                                {item.content}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    )
}