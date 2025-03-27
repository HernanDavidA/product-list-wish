import images from "../../images.json"
import Button from "../Button"
import "../../index.css"
type Props = {}

const index = (props: Props) => {
  return (
    <section className="columns-3 gap-8">
    
    {/*  BAKLAVA  */}
    <div
        className="card"
    >
        <img className="card-img-top rounded-2xl h-64" src={images.baklava} alt="Title" />
        <Button />
        <div className="card-body ">
            <h4 className="card-title">Baklava</h4>
            <p className="card-text">Pistachio Baklava</p>
            <p className='card-text'> 4.00$ </p>
        </div>
    </div>

    <div
        className="card"
    >
        <img className="card-img-top" src={images.brownie} alt="Title" />
        <button
            type="button"
            className="btn btn-primary"
        >
            Button
        </button>
        <div className="card-body">
            <h4 className="card-title">Brownie</h4>
            <p className="card-text"></p>
            <p className='card-text'> 5$ </p>
        </div>
    </div>
    <div
        className="card"
    >
        <img className="card-img-top" src={images.cake} alt="Title" />
        <button
            type="button"
            className="btn btn-primary"
        >
            Button
        </button>
        <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text"></p>
            <p className='card-text'> 5$ </p>
        </div>
    </div>
    <div
        className="card"
    >
        <img className="card-img-top" src={images.creme} alt="Title" />
        <button
            type="button"
            className="btn btn-primary"
        >
            Button
        </button>
        <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text"></p>
            <p className='card-text'> 5$ </p>
        </div>
    </div>
    <div
        className="card"
    >
        <img className="card-img-top" src={images.macaron} alt="Title" />
        <button
            type="button"
            className="btn btn-primary"
        >
            Button
        </button>
        <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text"></p>
            <p className='card-text'> 5$ </p>
        </div>
    </div>
    <div
        className="card"
    >
        <img className="card-img-top" src={images.meringue} alt="Title" />
        <button
            type="button"
            className="btn btn-primary"
        >
            Button
        </button>
        
        <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text"></p>
            <p className='card-text'> 5$ </p>
        </div>
    </div>
    <div
        className="card"
    >
        <img className="card-img-top" src={images.panna} alt="Title" />
        <button
            type="button"
            className="btn btn-primary"
        >
            Button
        </button>
        
        <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text"></p>
            <p className='card-text'> 5$ </p>
        </div>
    </div>
    <div
        className="card"
    >
        <img className="card-img-top" src={images.tiramisu} alt="Title" />
        <button
            type="button"
            className="btn btn-primary"
        >
            Button
        </button>
        
        <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text"></p>
            <p className='card-text'> 5$ </p>
        </div>
    </div>
    <div
        className="card"
    >
        <img className="card-img-top" src={images.waffle} alt="Title" />
        <button
            type="button"
            className="btn btn-primary"
        >
            Button
        </button>
        
        <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text"></p>
            <p className='card-text'> 5$ </p>
        </div>
    </div>
    
    
    
    </section>
  )
}

export default index