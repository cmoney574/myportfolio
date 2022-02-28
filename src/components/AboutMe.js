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
                        <h3> I can make my own website </h3>                
                        <p> 
                            This is quite interesting
                        </p>
                    </section>
                </div>
            </div>   
        </section>
    );
}