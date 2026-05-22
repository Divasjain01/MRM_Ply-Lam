interface SpecificationTableProps {
  specifications?: Record<string, string>
}

const SpecificationTable = ({ specifications }: SpecificationTableProps) => {
  const defaultSpecs = {
    "Standard Size": "8' x 4' (2440mm x 1220mm)",
    "Available Thickness": "4mm to 25mm",
    "Core Material": "Hardwood",
    "Glue Used": "Phenol Formaldehyde",
    "Moisture Content": "6-12%",
    Density: "550-650 kg/m3",
    "Formaldehyde Emission": "E1 Grade",
    "Standards Compliance": "IS 303, IS 848",
  }

  const specs = specifications || defaultSpecs

  return (
    <div className="overflow-hidden rounded-[24px] border border-black/6">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse">
          <thead className="bg-[#fbf1e5]">
            <tr>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-[#8b6b52]">
                Specification
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-[#8b6b52]">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(specs).map(([key, value], index) => (
              <tr key={key} className={index % 2 === 0 ? "bg-white" : "bg-[#fbf8f3]"}>
                <td className="border-t border-black/6 px-5 py-4 text-sm font-medium text-[#2b2b2b]">{key}</td>
                <td className="border-t border-black/6 px-5 py-4 text-sm leading-7 text-[#6e6e6e]">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SpecificationTable
