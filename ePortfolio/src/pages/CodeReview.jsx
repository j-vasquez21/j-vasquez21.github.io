import Header from '../components/Header';

function CodeReview() {
    return (
        <div>
            <Header title={'Jerry Vasquez'} />
            <main className="codereview-container">
                <h1>Code Review</h1>
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: 0,
                        paddingBottom: "56.25%",
                        left: 0,
                    }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/j2xzKqQ1C2M?rel=0"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: 0,
                        }}
                        allowFullScreen
                        scrolling="no"
                        allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; web-share *;"
                        referrerPolicy="strict-origin"
                    ></iframe>
                </div>
            </main>
        </div>
    );
}

export default CodeReview;