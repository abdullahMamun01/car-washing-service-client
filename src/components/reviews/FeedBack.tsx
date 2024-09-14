import { Star } from 'lucide-react'
import React from 'react'

type TFeedbackProps = {
    rating: number ,
    comments: string,
    name: string ,
}

export default function FeedBack({rating,comments ,name}: TFeedbackProps) {
    return (
        <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 w-full">
            <div>
                <div className="flex gap-0.5 text-green-500">
                    {[...Array(5)].map((r ,i) => <Star key={i}  fill={i + 1 <= rating ? "currentColor" : "none"}  />)}
                </div>

                <div className="mt-4">
                    <p className="text-2xl font-bold text-rose-600 sm:text-3xl">{name}</p>

                    <p className="mt-4 leading-relaxed text-gray-700">
                       {comments}
                    </p>
                </div>
            </div>

        </blockquote>
    )
}
