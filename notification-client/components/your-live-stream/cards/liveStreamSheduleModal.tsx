'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import CloseIcon from '@mui/icons-material/Close';
import './liveStreamSheduleModal.css';
import { useDispatch } from 'react-redux';



const formSchema = z.object({
    url: z.string().url('Enter a valid URL'),
    date: z.string().min(1, 'Date is required'),
    time: z.string().min(1, 'Time is required'),
});

type FormValues = z.infer<typeof formSchema>;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ShedularModal({ isOpen, onClose }: ModalProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });


    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const onSubmit = async (data: FormValues) => {
        const payload = {
            url: data.url,
            date: data.date,
            time: data.time,
        };

        console.log("Submitted data:", payload);

        const dateTime = new Date(`${data.date}T${data.time}`);
        console.log("Combined DateTime:", dateTime);

        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                
                <div className="modal-header">
                    <h2>Shedule Your Live Stream</h2>
                    <button
                        type="button"
                        className="modal-close-btn"
                        onClick={onClose}
                    >
                        <CloseIcon />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
                    
                    <div className="modal-body">

                        <div className="form-group">
                            <label htmlFor="url">URL</label>
                            <input
                                id="url"
                                placeholder="https://example.com"
                                {...register('url')}
                                className={errors.url ? 'error' : ''}
                            />
                            {errors.url && (
                                <span className="error-message">
                                    {errors.url.message}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                {...register('date')}
                                className={errors.date ? 'error' : ''}
                            />
                            {errors.date && (
                                <span className="error-message">
                                    {errors.date.message}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="time">Time</label>
                            <input
                                type="time"
                                id="time"
                                {...register('time')}
                                className={errors.time ? 'error' : ''}
                            />
                            {errors.time && (
                                <span className="error-message">
                                    {errors.time.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="submit" className="save-btn">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}