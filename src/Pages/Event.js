import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../LoginP';


export default function Event() {
    const loginContext = useContext(Context);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({});
    const [registered, setRegistered] = useState(false);

    function toggleRegistered(){
        setRegistered(registered === false ? true : false);
    }
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);

            let json;
            const eventId = window.location.pathname.substring(8);
            const url = `https://vef2-20222-v3-synilausn.herokuapp.com/events/${eventId}`;

            try {
                const result = await fetch(url);

                if (!result.ok) {
                    throw new Error('result not ok');
                }

                json = await result.json();
            } catch (e) {
                setError('Gat ekki sótt gögn.');
                return;
            } finally {
                setLoading(false);
            }

            setData(json);
        }
        fetchData();
    }, []);

    if (error) {
        return (
            <p>Villa kom upp: {error}</p>
        );
    }

    if (loading) {
        return (
            <p>Sæki gögn...</p>
        );
    }



    let event = data || [];
    let reg = data.registrations || [];


    return (
        <section className="event">
            <div className="event__info">
                <h1 className="event__title">{event.name}</h1>
                <p className="event__description">{event.description}</p>
            </div>
            <div className="event__registered">
                <h2 className="event__subtitle">Skráningar á viðburð</h2>
                {reg.length === 0 &&
                    <p className="event__empty">Engin hefur skráð sig á þennan viðburð</p>
                }
                <ul className="event__registeredList">
                    {reg.length > 0 && reg.map((regis, i) => {
                        const {
                            name, comment
                        } = regis;
                        return (<li className="event__registeredItem" key={i}>
                            <span className="event__registeredName">{name}</span>
                            {comment != null &&
                                <span className="event__registeredComment">{comment}</span>}
                        </li>)
                    })}
                </ul>
            </div>
            {loginContext.login === false && <div className="event__registeredItem">Skráðu þig inn til að skrá þig á viðburðinn</div>}
            {loginContext.login === true && registered === false && <form className="field field--textarea">
                <div >
                    <label >Athugasemd:</label>
                    <input></input>
                </div>
                <button className="button" onClick={() => toggleRegistered() }>Skrá mig</button>
            </form>}
            {loginContext.login === true && registered === true && <div> Þú hefur verið skráður á viðburðinn </div>}
            <Link className="link__link" to="/">Til baka</Link>
        </section>
    );

}
/*
<div className="event__registered">
<h2 className="event__subtitle">Skráningar á viðburð</h2>
{event.registrations.length === 0 &&
    <p className="event__empty">Engin hefur skráð sig á þennan viðburð</p>
}
<ul className="event__registeredList">
    {event.registrations.length > 0 && event.registrations.map((reg, i) => {
        <li className="event__registeredItem">
            <span className="event__registeredName">{reg.name}</span>
            { reg.comment != null && 
            <span className="event__registeredComment">{reg.comment}</span>}
        </li>
    })};
</ul>

</div>*/