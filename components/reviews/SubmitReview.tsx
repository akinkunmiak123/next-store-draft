'use client'

import { useState, useEffect } from 'react'
import { SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import { Card } from '@/components/ui/card'
import RatingInput from '@/components/reviews/RatingInput'
import TextAreaInput from '@/components/form/TextAreaInput'
import { Button } from '@/components/ui/button'
import { createReviewAction, findExistingReview } from '@/utils/actions'
import { useUser } from '@clerk/nextjs'

interface SubmitReviewProps {
  productId: string
}

function SubmitReview({ productId }: SubmitReviewProps) {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false)
  const [canSubmit, setCanSubmit] = useState(false)
  const { user } = useUser()

  useEffect(() => {
    if (!user) return

    // Check if the user already submitted a review
    findExistingReview(user.id, productId).then((existing) => {
      setCanSubmit(!existing)
    })
  }, [user, productId])

  if (!user || !canSubmit) return null

  return (
    <div>
      <Button
        size="lg"
        className="capitalize"
        onClick={() => setIsReviewFormVisible((prev) => !prev)}
      >
        Leave Review
      </Button>

      {isReviewFormVisible && (
        <Card className="p-8 mt-8">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="productId" value={productId} />
            <input
              type="hidden"
              name="authorName"
              value={user.firstName || 'user'}
            />
            <input type="hidden" name="authorImageUrl" value={user.imageUrl} />
            <RatingInput name="rating" />
            <TextAreaInput
              name="comment"
              labelText="Feedback"
              defaultValue="Outstanding product!!!"
            />
            <SubmitButton className="mt-4" />
          </FormContainer>
        </Card>
      )}
    </div>
  )
}

export default SubmitReview
