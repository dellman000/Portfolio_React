import { Navigation } from "../Componets"
export function Contact() {
    return (<>
        <Navigation />
        <h1>Contact Me</h1>

        <form className="d-flex justify-content-center flex-column align-items-center ">
            <section className="p-4">

                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                    <small id="emailHelp" className="form-text text-muted">email will not be shared anyone else.</small>
                </div>

                <div className="form-group">
                    <label >Fullname</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Fullname" required />
                </div>

                <div className="form-group">
                    <label >message</label>
                    <textarea type="text" className="form-control" id="exampleInputPassword1" placeholder="extra information" row='3' required />
                </div>

            </section>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>


    </>)
}