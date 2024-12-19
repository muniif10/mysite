import PortfolioList from "@/pages/portfolio/portfolio_list";
import { Carousel, CarouselContent, CarouselItem } from "@/src/components/ui/carousel";
const Portfolio = () => {
  return (
    (
      <div className="">
        <h1 id="the_portfolio" className="max-w-prose mt-4 text-center font-extrabold text-3xl capitalize my-2 py-2 text-transparent bg-clip-text bg-gradient-to-br from-orange-200 to-orange-500 ">
          Portfolio
        </h1>


        <div>
          {PortfolioList.map((portfolio) => {
            return <div key={portfolio.title}>
              <div className="border-gray-200 border-[0.5px] shadow-sm rounded-sm bg-white p-5 mb-2">
                <div className="flex-row flex place-content-between">
                  <p className="font-bold">{portfolio.title}</p>
                  <p className=" text-gray-500 text-sm">{portfolio.date}</p>
                </div>
                <div>

                  {/* {portfolio.image !== null ? <img className="rounded-sm shadow-sm my-5 object-fill" src={portfolio.image} /> : <></>} */}
                  {/* {portfolio.image?.length > 1? :  } */}
                  <div className="py-5">
                  <Carousel opts={{ align: "start", loop: true }}>
                    <CarouselContent>
                      {portfolio.image !== null ? (
                        Array.isArray(portfolio.image) && portfolio.image.length > 1 ? (
                          portfolio.image.map((image, index) => (
                            <CarouselItem  key={index}> {/* Key should be here on CarouselItem */}
                              <img
                                className="rounded-sm shadow-sm object-cover max-w-full max-h-[400px] m-auto"
                                src={image}
                                alt={`Portfolio image ${index}`}
                                style={{ objectFit: "cover" }} // Ensures the image covers the area while maintaining aspect ratio
                              />
                            </CarouselItem>
                          ))
                        ) : (
                          <CarouselItem key={0}>
                            <img
                              className="rounded-sm shadow-sm object-cover max-w-full max-h-[400px] m-auto"
                              src={portfolio.image[0]}
                              alt="Portfolio image"
                              style={{ objectFit: "cover" }}
                            />
                          </CarouselItem>
                        )
                      ) : null}
                    </CarouselContent>
                  </Carousel>
                  </div>

                </div>
                
                <p className="text-gray-500 text-sm text-justify">{portfolio.description}</p>
              </div>
            </div>
          })}
        </div>
      </div >
    )
  )
}

export default Portfolio