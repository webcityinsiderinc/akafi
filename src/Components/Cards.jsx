import React, { useState } from "react";

const cardData = [
    {
        stat: "150+",
        // title: "Orphans supported",
        subtitle: "Orphans supported with school uniforms, shoes, and essentials",
        description:
            "We help orphans regain stability and confidence by providing school uniforms, shoes, and essential learning materials. Our support restores dignity, encourages children to stay in school, and gives them a sense of belonging at a time when they need hope the most"
    },
    {
        stat: "80+",
        // title: "Families assisted",
        subtitle: "food packs and hygiene kits",
        description:
            "Monthly food packs and hygiene kits delivered to families in need."
    },
    {
        stat: "25",
        // title: "Schools partnered",
        subtitle: "for sustainable support",
        description:
            "Collaborated with schools to ensure long-term support for children."
    }
];

export default function Cards() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleCard = (index) => { setOpenIndex(openIndex === index ? null : index); };
    return (
        <div className="cards-container">
            {cardData.map((card, index) => (
                <div className="card-wrap" key={index}>
                    {openIndex === index ? (
                        <div className="card-description fade-up">
                            <button className="close-btn" onClick={() => toggleCard(index)}
                            >
                                ×
                            </button>
                            <p>{card.description}</p>
                        </div>
                    ) : (
                        <div className="card-header">
                            <h2>{card.stat}</h2>
                            <h3>{card.title}</h3>
                            <p>{card.subtitle}</p>
                            <button onClick={() => toggleCard(index)}
                                className="toggle-btn"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
