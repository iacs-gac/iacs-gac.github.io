import { GlobalFooter } from "../../util/components/Nav/GlobalFooter";

import { IRootProps } from "../../util";

export function EventsPage(props: IRootProps) {
    return <div >
        <div className="rel-cont">
            <div
                className="fade-up header-text "
            >
                <div  className="p-10L-10R">
                    <div className="header-image-text add-seriff " >Calendar</div>
                    <br />
                    <div className="header-image-subtext">See what's on the horizon.</div>
                </div>
            </div>

            <div className="faded-image header-container">
                <img alt="calendar header" src="/images/books.jpeg" className="header-image" />
            </div>
        </div>
        <div style={{ height: '80vh' }} className="fade-up fade-up-delay ">
            <iframe title='calendar' src="https://calendar.google.com/calendar/embed?src=harvardgac%40gmail.com&ctz=America%2FNew_York"
                style={{ border: 0 }} width="100%" height="100%" frameBorder="0" scrolling="no"></iframe>
        </div>
        <GlobalFooter {...props} />
    </div>
}


