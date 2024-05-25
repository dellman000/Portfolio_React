import raceCar from './images/race_car02.jpg'
import bookStore from './images/Bookshelf-Mural-Wallpaper.jpg'
import classes from './images/classes.jpg'
export function Project(props) {
    const projectArr = [
        {
            title: 'Need For Cash',
            img: raceCar,
            link:"https://github.com/dellman000/need-for-cash"
        },
        {
            title: 'School Bookstore',
            img: bookStore,
            link:"https://github.com/dellman000/Weather_Dashboard_API"
        },
        {
            title: 'ClassPicker',
            img: classes,
            link:"https://github.com/dellman000/SVG_Logo_Generator"
        }
    ]
    const projectsDisplay = projectArr.map((element,index) => {
        return (
            <div key={index}>
                <h1>{element.title}  </h1>
                <a href={element.link}>
                <img className='custom-section' src={element.img} alt="" />
                </a>
            </div>
        )
    })
    return (
        <section className="d-flex flex-column justify-content-center align-items-center ">
            {projectsDisplay}
            
        </section>
    )
}