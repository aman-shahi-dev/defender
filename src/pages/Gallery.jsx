import GalleryCard from "../components/GalleryCard"

function Gallery() {
  const details = [
    {
      img: '/octa-1.jpg',
      title: 'View 1',
    },
    {
      img: '/octa-2.jpg',
      title: 'View 2',
    },
    {
      img: '/octa-3.jpg',
      title: 'View 3',
    }
  ]
  
  return (
    <div className='flex w-full flex-1 gap-4 p-4 justify-evenly items-center flex-wrap'>
      {
        details.map((detail) => (
          <GalleryCard key={detail.title} detail={detail} />
        ))
      } 
    </div>
  )
}

export default Gallery