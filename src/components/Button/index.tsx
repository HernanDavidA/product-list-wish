import image from "../../images.json"


type Props = {}

const index = (props: Props) => {
  return (
    <button type='button'
    className='addToCar bg-white w-36 h-10 justify-around rounded-3xl border border-gray-300 card-title flex p-2 cursor-pointer ' > 
    <img src={image.cart} alt="Cart icon" />
    Add to Cart
    </button>

  )
}

export default index