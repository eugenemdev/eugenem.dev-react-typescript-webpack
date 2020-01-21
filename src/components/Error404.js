
class Error404 {

    static render(){

        return /*html*/`
        <main id="main-content">
            <div class="container">
                <article>                    
                    <img src="./images/404.svg" 
                        alt="404-error"/>
                </article>
            </div>
        </main>`;
    }

    static after_render(){
        
    }
}

export default Error404;


