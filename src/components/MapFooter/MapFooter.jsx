const GoogleMap = ({ address }) => {
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&output=embed`;

    return (
        <div style={{ width: "100%", height: "100%", minHeight: "250px", borderRadius: 20, overflow: "hidden" }}>
            <iframe
                title="Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src={mapUrl}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default GoogleMap