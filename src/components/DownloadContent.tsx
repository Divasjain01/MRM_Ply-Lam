import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Download, FileText, FolderKanban, Shapes } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { catalogAssets, categoryMeta } from "@/lib/site-content"

const categories = Object.values(categoryMeta)

const DownloadContent = () => {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]["key"]>("plyandboards")
  const navigate = useNavigate()

  const assets = useMemo(
    () => catalogAssets.filter((asset) => asset.category === selectedCategory),
    [selectedCategory],
  )

  const handleDownload = (url: string, title: string) => {
    console.log(`Downloading: ${title}`)
    window.open(url, "_blank")
  }

  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="rounded-[26px] border border-black/6 bg-white p-4 shadow-[0_16px_60px_rgba(34,24,16,0.06)] sm:rounded-[34px] sm:p-8">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8b6b52]">Curated Library</div>
            <h2 className="mt-2 text-2xl font-semibold text-[#2b2b2b] sm:text-4xl">Catalogs, brochures, and technical support files</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6e6e6e] sm:mt-4 sm:text-lg sm:leading-8">
              Built as a premium catalogue library rather than a file dump, this section is organized by material family
              and is ready for future PDFs, brochures, specification sets, and downloadable media.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[20px] bg-[#fbf8f3] p-4 sm:rounded-[24px]">
              <FolderKanban className="h-5 w-5 text-[#f26a21]" />
              <div className="mt-3 text-2xl font-semibold text-[#2b2b2b]">{catalogAssets.length}</div>
              <div className="mt-1 text-sm text-[#6e6e6e]">Library assets</div>
            </div>
            <div className="rounded-[20px] bg-[#fbf8f3] p-4 sm:rounded-[24px]">
              <Shapes className="h-5 w-5 text-[#f26a21]" />
              <div className="mt-3 text-2xl font-semibold text-[#2b2b2b]">{categories.length}</div>
              <div className="mt-1 text-sm text-[#6e6e6e]">Material families</div>
            </div>
            <div className="rounded-[20px] bg-[#fbf8f3] p-4 sm:rounded-[24px]">
              <FileText className="h-5 w-5 text-[#f26a21]" />
              <div className="mt-3 text-2xl font-semibold text-[#2b2b2b]">PDF ready</div>
              <div className="mt-1 text-sm text-[#6e6e6e]">Scalable file structure</div>
            </div>
          </div>
        </div>
      </section>

      <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as typeof selectedCategory)}>
        <TabsList className="grid h-auto w-full grid-cols-2 gap-2 rounded-[24px] bg-transparent p-0 md:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => (
            <TabsTrigger
              key={category.key}
              value={category.key}
              className="rounded-[18px] border border-black/6 bg-[#fbf8f3] px-3 py-3 text-xs leading-5 data-[state=active]:border-[#f26a21]/30 data-[state=active]:bg-[#fff4eb] data-[state=active]:text-[#2b2b2b] sm:rounded-[22px] sm:px-4 sm:text-sm"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.key} value={category.key} className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
            <section className="grid gap-5 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="overflow-hidden rounded-[24px] border border-black/6 bg-[#2b2b2b] text-white sm:rounded-[30px]">
                <img src={category.previewImage} alt={category.label} className="aspect-[16/10] w-full object-cover opacity-80" />
                <div className="space-y-3 p-4 sm:p-6">
                  <div className="text-[0.7rem] uppercase tracking-[0.24em] text-white/45">{category.eyebrow}</div>
                  <h3 className="text-xl font-semibold sm:text-2xl">{category.label}</h3>
                  <p className="text-sm leading-7 text-white/70">{category.description}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {assets.map((asset) => (
                  <Card key={asset.id} className="rounded-[24px] border-black/6 shadow-[0_14px_50px_rgba(34,24,16,0.05)] sm:rounded-[28px]">
                    <CardContent className="flex h-full flex-col p-4 sm:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className="text-[0.66rem] uppercase tracking-[0.18em] text-[#8b6b52]">{asset.type}</div>
                        <div className="rounded-full bg-[#fbf8f3] px-3 py-1 text-[11px] text-[#6e6e6e] sm:text-xs">
                          {asset.format} · {asset.fileSize}
                        </div>
                      </div>

                      <h4 className="mt-4 text-lg font-semibold text-[#2b2b2b] sm:text-xl">{asset.title}</h4>
                      <p className="mt-3 flex-1 text-sm leading-7 text-[#6e6e6e]">{asset.description}</p>

                      <div className="mt-5 flex flex-col gap-3 border-t border-black/6 pt-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="text-[11px] uppercase tracking-[0.16em] text-[#8b6b52] sm:text-xs">
                          Ready to view
                        </div>
                        <Button
                          variant="primary"
                          className="h-11 rounded-full"
                          onClick={() => handleDownload(asset.url, asset.title)}
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="rounded-[24px] border-black/6 bg-[#fbf8f3] shadow-none sm:rounded-[30px]">
        <CardContent className="flex flex-col gap-4 p-4 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-[#2b2b2b] sm:text-2xl">Need a collection-specific PDF later?</h3>
            <p className="mt-2 text-sm leading-7 text-[#6e6e6e]">
              The library is now structured so each product family or collection can carry its own catalogue, brochure,
              technical sheet, and future specification file without changing the page design.
            </p>
          </div>

          <Button variant="outline" className="h-11 rounded-full bg-white" onClick={() => navigate("/contact")}>
            Contact technical support
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default DownloadContent
