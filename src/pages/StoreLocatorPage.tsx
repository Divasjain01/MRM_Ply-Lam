import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Clock, ExternalLink, Filter, MapPin, Navigation, Phone, Search } from "lucide-react"

interface Store {
  id: number
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  phone: string
  email: string
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
  services: string[]
  distance?: number
  image: string
  coordinates: {
    lat: number
    lng: number
  }
}

const mockStores: Store[] = [
  {
    id: 1,
    name: "MRM PLY LAM LLP (Main Office)",
    address: "No. 170, Mettupalayam Road",
    city: "Coimbatore",
    state: "Tamil Nadu",
    zipCode: "641043",
    phone: "+91 96290 15535",
    email: "info@mrmplylam.com",
    hours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 4:00 PM",
      sunday: "Closed",
    },
    services: ["Main Office", "Corporate Sales", "Customer Support"],
    distance: 0,
    image: "/modern-plywood-store-exterior-downtown.jpg",
    coordinates: { lat: 11.0168, lng: 76.9558 },
  },
  {
    id: 2,
    name: "MAHAVIR LAMINATES",
    address: "706, Mettupalayam Road, Near Chintamani Super Market, R.S.Puram",
    city: "Coimbatore",
    state: "Tamil Nadu",
    zipCode: "641002",
    phone: "+91 99524 98213",
    email: "mahavirlaminates@mrmplylam.com",
    hours: {
      weekdays: "9:00 AM - 7:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "10:00 AM - 4:00 PM",
    },
    services: ["Laminates", "Retail Sales", "Expert Consultation"],
    distance: 2.5,
    image: "/Mahavir Laminates Coimbatore1.png",
    coordinates: { lat: 11.01, lng: 76.95 },
  },
  {
    id: 3,
    name: "M CUBE SPACES LLP",
    address: "62, Pattanagere Main Road, Rajarajeshwari Nagar",
    city: "Bengaluru",
    state: "Karnataka",
    zipCode: "560059",
    phone: "+91 98292 20292",
    email: "mcubespace@mrmplylam.com",
    hours: {
      weekdays: "9:00 AM - 7:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "10:00 AM - 4:00 PM",
    },
    services: ["Full Service", "Interior Solutions", "Commercial Sales"],
    distance: 285,
    image: "/M Cube Spaces.png",
    coordinates: { lat: 12.9081, lng: 77.4847 },
  },
  {
    id: 4,
    name: "MAHAVIR WOODS N VENEER",
    address: "No. 48, Choolai High Road, Choolai",
    city: "Chennai",
    state: "Tamil Nadu",
    zipCode: "600112",
    phone: "+91 98407 59369 / +91 90802 03162",
    email: "mahavirwoods@mrmplylam.com",
    hours: {
      weekdays: "9:00 AM - 7:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "10:00 AM - 4:00 PM",
    },
    services: ["Woods & Veneers", "Premium Products", "Custom Orders"],
    distance: 425,
    image: "/Mahavir Woods and Veneer Chennai.png",
    coordinates: { lat: 13.0827, lng: 80.2707 },
  },
  {
    id: 5,
    name: "R S Plywood",
    address: "Plot No.145, Outside Gail No. 6, Main Road, Milk Man Colony",
    city: "Jodhpur",
    state: "Rajasthan",
    zipCode: "342008",
    phone: "+91 98290 12345",
    email: "rsplywood@mrmplylam.com",
    hours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 4:00 PM",
      sunday: "Closed",
    },
    services: ["Plywood", "Wholesale", "Bulk Orders"],
    distance: 1850,
    image: "/RS Plywood.png",
    coordinates: { lat: 26.2389, lng: 73.0243 },
  },
]

export default function StoreLocatorPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredStores, setFilteredStores] = useState<Store[]>(mockStores)
  const [selectedService, setSelectedService] = useState<string>("")
  const [userLocation, setUserLocation] = useState<string>("")

  const allServices = Array.from(new Set(mockStores.flatMap((store) => store.services)))

  useEffect(() => {
    let filtered = mockStores

    if (searchQuery) {
      filtered = filtered.filter(
        (store) =>
          store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.zipCode.includes(searchQuery),
      )
    }

    if (selectedService) {
      filtered = filtered.filter((store) => store.services.includes(selectedService))
    }

    setFilteredStores(filtered)
  }, [searchQuery, selectedService])

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation(`${position.coords.latitude}, ${position.coords.longitude}`)
        },
        (error) => {
          console.error("Error getting location:", error)
        },
      )
    }
  }

  const getDirectionsUrl = (store: Store) => {
    const address = `${store.address}, ${store.city}, ${store.state} ${store.zipCode}`
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="overflow-hidden border-b border-black/5 bg-[#f7f1e7]">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Store Locator</div>
            <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-[#2b2b2b] sm:text-5xl lg:text-6xl">
              Find the nearest MRM store with the same clean experience as the rest of the website.
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6e6e6e] sm:mt-5 sm:text-lg sm:leading-8">
              Search by city, address, or service type and explore store details in a clearer, more premium layout.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <section className="rounded-[26px] border border-black/6 bg-white p-4 shadow-[0_16px_60px_rgba(34,24,16,0.06)] sm:rounded-[32px] sm:p-8">
              <div className="mb-5 grid gap-4 lg:mb-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Search & Filter</div>
                  <h2 className="mt-2 text-xl font-semibold text-[#2b2b2b] sm:text-2xl">Locate stores by city, service, or address</h2>
                </div>
                {userLocation && (
                  <div className="inline-flex items-center gap-2 rounded-2xl bg-[#fbf8f3] px-4 py-2 text-xs leading-5 text-[#6e6e6e] sm:rounded-full sm:text-sm">
                    <MapPin className="h-4 w-4 text-[#f26a21]" />
                    Using location: {userLocation}
                  </div>
                )}
              </div>

              <div className="grid gap-3 md:grid-cols-3 md:gap-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Enter city, zip code, or address"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12 rounded-full border-[#eadfce] bg-[#fbf8f3] pl-11"
                  />
                </div>

                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="h-12 w-full rounded-full border border-[#eadfce] bg-[#fbf8f3] pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">All Services</option>
                    {allServices.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <Button onClick={handleGetLocation} variant="primary" className="h-12 rounded-full">
                  <Navigation className="mr-2 h-4 w-4" />
                  Use My Location
                </Button>
              </div>
            </section>

            <section className="mt-8 rounded-[26px] border border-black/6 bg-[#fbf8f3] p-4 shadow-[0_16px_60px_rgba(34,24,16,0.05)] sm:mt-10 sm:rounded-[32px] sm:p-8">
              <div className="mb-6 flex flex-col gap-3 sm:gap-4 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Results</div>
                  <h2 className="mt-2 text-2xl font-semibold text-[#2b2b2b] sm:text-3xl">
                    {filteredStores.length} Store{filteredStores.length !== 1 ? "s" : ""} Found
                  </h2>
                </div>
                {searchQuery && (
                  <p className="text-sm text-[#6e6e6e]">
                    Showing results for "{searchQuery}"{selectedService && ` with ${selectedService}`}
                  </p>
                )}
              </div>

              <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredStores.map((store) => (
                  <Dialog key={store.id}>
                    <DialogTrigger asChild>
                      <Card className="group cursor-pointer overflow-hidden rounded-[24px] border-black/6 bg-white shadow-[0_14px_50px_rgba(34,24,16,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(34,24,16,0.1)] sm:rounded-[28px]">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={store.image || "/placeholder.svg"}
                            alt={`${store.name} storefront`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {typeof store.distance === "number" && (
                            <Badge className="absolute right-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[#2b2b2b] shadow-sm">
                              {store.distance} miles away
                            </Badge>
                          )}
                        </div>

                        <CardContent className="space-y-3 p-4 sm:space-y-4 sm:p-5">
                          <div>
                            <div className="text-[0.66rem] uppercase tracking-[0.18em] text-[#8b6b52]">{store.city}</div>
                            <h3 className="mt-2 text-lg font-semibold text-[#2b2b2b] sm:text-xl">{store.name}</h3>
                          </div>
                          <div className="flex items-start text-sm leading-6 text-[#6e6e6e]">
                            <MapPin className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-[#f26a21]" />
                            <span>
                              {store.address}, {store.city}, {store.state}
                            </span>
                          </div>
                          <Button variant="outline" className="h-11 w-full rounded-full bg-transparent">
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    </DialogTrigger>

                    <DialogContent className="w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] overflow-hidden rounded-[24px] border-black/6 p-0 sm:w-[min(92vw,56rem)] sm:max-w-[min(92vw,56rem)] sm:rounded-[32px] xl:max-w-5xl">
                      <div className="max-h-[88vh] overflow-y-auto">
                        <div className="grid gap-0 xl:grid-cols-[0.95fr_1.05fr]">
                          <div className="min-w-0 bg-[#fbf8f3] p-4 sm:p-8">
                          <DialogHeader>
                            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">{store.city}</div>
                            <DialogTitle className="mt-2 break-words text-2xl font-semibold text-[#2b2b2b] sm:text-3xl">{store.name}</DialogTitle>
                          </DialogHeader>

                          <div className="mt-5 aspect-[4/3] overflow-hidden rounded-[20px] sm:mt-6 sm:rounded-[24px]">
                            <img
                              src={store.image || "/placeholder.svg"}
                              alt={`${store.name} storefront`}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <div className="mt-5 space-y-5 sm:mt-6">
                            <div>
                              <h4 className="font-semibold text-[#2b2b2b]">Address</h4>
                              <div className="mt-2 flex items-start text-sm leading-6 text-[#6e6e6e]">
                                <MapPin className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-[#f26a21]" />
                                <span className="break-words">
                                  {store.address}
                                  <br />
                                  {store.city}, {store.state} {store.zipCode}
                                </span>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-[#2b2b2b]">Contact</h4>
                              <div className="mt-2 space-y-2 text-sm text-[#6e6e6e]">
                                <a href={`tel:${store.phone}`} className="flex items-center hover:text-[#2b2b2b]">
                                  <Phone className="mr-2 h-4 w-4 text-[#f26a21]" />
                                  {store.phone}
                                </a>
                                <a href={`mailto:${store.email}`} className="flex items-center hover:text-[#2b2b2b]">
                                  <span className="mr-2 text-[#f26a21]">@</span>
                                  {store.email}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                          <div className="min-w-0 p-4 sm:p-8">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="min-w-0 rounded-[20px] bg-[#fbf8f3] p-4 sm:rounded-[24px] sm:p-5">
                              <div className="flex items-center gap-2 text-sm font-semibold text-[#2b2b2b]">
                                <Clock className="h-4 w-4 text-[#f26a21]" />
                                Store Hours
                              </div>
                              <div className="mt-3 space-y-2 text-sm leading-6 text-[#6e6e6e]">
                                <div><strong>Mon-Fri:</strong> {store.hours.weekdays}</div>
                                <div><strong>Saturday:</strong> {store.hours.saturday}</div>
                                <div><strong>Sunday:</strong> {store.hours.sunday}</div>
                              </div>
                            </div>

                            <div className="min-w-0 rounded-[20px] bg-[#fbf8f3] p-4 sm:rounded-[24px] sm:p-5">
                              <div className="text-sm font-semibold text-[#2b2b2b]">Available Services</div>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {store.services.map((service) => (
                                  <Badge key={service} variant="outline" className="max-w-full rounded-full border-[#eadfce] bg-white text-center whitespace-normal">
                                    {service}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 rounded-[22px] border border-black/6 bg-[#2b2b2b] p-4 text-white sm:rounded-[28px] sm:p-6">
                            <h4 className="text-lg font-semibold sm:text-xl">Location Map</h4>
                            <div className="mt-4 flex aspect-square items-center justify-center rounded-[18px] bg-white/6 text-center sm:mt-5 sm:rounded-[22px]">
                              <div>
                                <MapPin className="mx-auto h-12 w-12 text-[#f7b488]" />
                                <p className="mt-3 text-sm text-white/72">Interactive Map</p>
                                <p className="mt-1 text-xs text-white/52">
                                  {store.coordinates.lat}, {store.coordinates.lng}
                                </p>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="mt-4 rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                                  asChild
                                >
                                  <a href={getDirectionsUrl(store)} target="_blank" rel="noopener noreferrer">
                                    Open in Google Maps
                                    <ExternalLink className="ml-2 h-3 w-3" />
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <Button asChild className="flex-1 rounded-full" variant="primary">
                              <a href={getDirectionsUrl(store)} target="_blank" rel="noopener noreferrer">
                                <Navigation className="mr-2 h-4 w-4" />
                                Get Directions
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                            <Button variant="outline" asChild className="flex-1 rounded-full bg-transparent">
                              <a href={`tel:${store.phone}`}>
                                <Phone className="mr-2 h-4 w-4" />
                                Call Store
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>

              {filteredStores.length === 0 && (
                <div className="py-12 text-center sm:py-16">
                  <MapPin className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                  <h3 className="text-xl font-semibold text-[#2b2b2b] sm:text-2xl">No stores found</h3>
                  <p className="mt-2 text-muted-foreground">Try adjusting your search criteria or expanding your search area.</p>
                  <Button
                    className="mt-6 rounded-full"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedService("")
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
