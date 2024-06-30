const SubscribeSection = () => {
    return (
        <section className="d-flex justify-content-around align-items-center p-5 flex-column flex-md-row bg-light">
        <div className="text-center">
          <h2>Subscribe</h2>
          <p>Get recipes worth repeating and more from our chefs, straight to your inbox.</p>
        </div>
        <form className="form-inline">
          <div className="form-group mb-2">
            <label htmlFor="Name" className="sr-only">Name</label>
            <input type="text" className="form-control" id="Name" placeholder="Name" />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Email" />
          </div>
          <button type="submit" className="btn btn-primary mb-2">Subscribe</button>
        </form>
      </section>
    );
  };

  export default SubscribeSection;