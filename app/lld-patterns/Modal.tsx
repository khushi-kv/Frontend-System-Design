import React from "react";

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    title?: string,
    children: React.ReactNode,
}
export default function Modal({ isOpen, onClose, title, children }: ModalProps) {

    if (!isOpen) return null;


    return (
        <>

            <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                <div className="w-[450px] rounded-lg bg-white shadow-xl">
                    <div className="flex items-center justify-between border-b p-4">
                        <h2 className="text-xl font-semibold">{title}</h2>

                        <button
                            onClick={onClose}
                            className="cursor-pointer rounded px-2 py-1 hover:bg-gray-100"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="p-4">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )


}