"use client"

import { useEffect, useState } from "react"

// Card component
const Card = ({ className, children, onClick }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`} onClick={onClick}>
    {children}
  </div>
)

// CardContent component
const CardContent = ({ className, children }) => <div className={`p-4 ${className}`}>{children}</div>

const AnimatedCarousel = ({ images }) => {
  const [duplicatedImages, setDuplicatedImages] = useState([])
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    setDuplicatedImages([...images, ...images])
  }, [images])

  const handleImageClick = (image) => {
    setActiveImage(image)
  }

  const handleClosePopup = () => {
    setActiveImage(null)
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="animate-carousel hover:pause-animation flex">
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/5 px-8 "
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={`Carousel item ${index}`}
              className="w-full h-36 object-cover rounded-lg cursor-pointer"
            />
          </div>
        ))}
      </div>
      {activeImage && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleClosePopup}
        >
          <Card className="w-80 max-w-[90%]" onClick={(e) => e.stopPropagation()}>
            <CardContent>
              <img
                src={activeImage.src || "/placeholder.svg"}
                alt={activeImage.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{activeImage.name}</h3>
              <p className="text-sm mb-1">
                <span className="font-medium">Title:</span> {activeImage.title}
              </p>
              <p className="text-sm">
                <span className="font-medium">Favorite Food:</span> {activeImage.favoriteFood}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default AnimatedCarousel

