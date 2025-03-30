// Componente RegionButton.jsx
const RegionButton = ({ region, currentRegion, onClick }) => {
    const isActive = region === currentRegion;
    return (
      <button
        className={`font-semibold px-4 py-2 rounded-lg cursor-pointer transition-colors ${
          isActive
            ? "bg-blue-600 text-white shadow-md"
            : "bg-gray-200 hover:bg-gray-300 text-gray-800"
        }`}
        value={region}
        onClick={onClick}
      >
        {region || "Todas"}
      </button>
    );
  };
  
  // En tu componente principal
  <div className="w-full h-full space-x-2">
    <RegionButton 
      region="" 
      currentRegion={regionValue} 
      onClick={handleChangeCheckbox} 
    />
    {uniquesRegions.map((region) => (
      <RegionButton
        key={region}
        region={region}
        currentRegion={regionValue}
        onClick={handleChangeCheckbox}
      />
    ))}
  </div>