import Picture from '../images/SelfPhoto.jpg'

export default function AboutMe() {
    return (
        <section id="about">
            <div>
                <div>
                    <section
                        style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        backgroundColor: 'lightblue',
                            }}
                    >
                        <h2> My name is Charles Money</h2>
                        <img src={Picture} alt = "project" height="200" width="200"/>
                        <h3> I am a full stack web-developer taking the Georgia Tech Web Development Bootcamp course </h3>                
                        <p> 
                            I like programming, chess, video games, and reading
                        </p>
                    </section>
                </div>
            </div>   
        </section>
    );
}