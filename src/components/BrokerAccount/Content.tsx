import { useLabels } from "@/utils/useLabels";
import useProperty from "@/utils/useProperty";
import Button from "../Button";
import { RaiziaLogo } from "../Icons";

type Property = 'Casa' | 'Departamento'

function Content() {
  const { account, footer } = useLabels();
  const { properties, transactions } = useProperty();
  const currentSection = 0;

  const getProperty = (p: Property) => {
    const property = {
      Departamento: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21l18 0" />
        <path d="M9 8l1 0" />
        <path d="M9 12l1 0" />
        <path d="M9 16l1 0" />
        <path d="M14 8l1 0" />
        <path d="M14 12l1 0" />
        <path d="M14 16l1 0" />
        <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
      </svg>,
      Casa: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
        <path d="M10 12h4v4h-4z" />
      </svg>
    }
    return property[p]
  }

  return (
    <article className="mt-10">
      <div className="border-b-1 border-gray-200 pb-2">
        <h2 className="text-2xl font-bold text-darkGreen">{account.sections[currentSection].name.toLocaleUpperCase()}</h2>
        <p className="text-darkGreen/75 text-sm">{account.sections[currentSection].message}</p>
      </div>
      <section className="my-5">
        <h2 className="text-lg font-bold text-darkGreen/90">{account.leads.title}</h2>
        <p className="text-darkGreen/75 text-sm">{account.leads.message}</p>
      </section>
      <section className="flex flex-row overflow-scroll py-4 justify-start gap-8 my-10">
        {properties.map((property) => {
          const formatter = new Intl.RelativeTimeFormat('es', { style: 'long' })
          const time = formatter.format(property.lastUpdate, 'day')
          const getCurrentPrice = (price: number) => {
            return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price)
          }
          return (
            <article key={property.location} className="bg-white p-4 shadow-lg rounded-md relative aspect-video">
              <div className="flex flex-row gap-2 items-center w-80">
                {getProperty(property.property as Property)}
                <div className="flex flex-col">
                  <strong className="text-base text-darkGreen/80">{property.property}</strong>
                  <small className="text-sm text-darkGreen/50">{time}</small>
                </div>
              </div>
              <div className="absolute top-5 right-2">
                {
                  property.type.map((type) => (
                    <span key={`${property.location}-${type}`} className={`text-white ${type === 'Venta' ? 'bg-pink-500' : 'bg-blue-300'} py-1 px-4 rounded-full text-xs mx-1`}>
                      {type}
                    </span>
                  ))
                }
              </div>
              <div className="flex flex-col gap-3 my-5 pl-2">
                <div className="flex flex-row gap-1 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                  <small className="text-darkGreen/70 text-xs">{property.location}</small>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tag" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
                    <path d="M4 7v3.859c0 .537 .213 1.052 .593 1.432l8.116 8.116a2.025 2.025 0 0 0 2.864 0l4.834 -4.834a2.025 2.025 0 0 0 0 -2.864l-8.117 -8.116a2.025 2.025 0 0 0 -1.431 -.593h-3.859a3 3 0 0 0 -3 3z" />
                  </svg>
                  <small className="text-darkGreen/50 text-xs">{`${getCurrentPrice(property.minPrice)} - ${getCurrentPrice(property.maxPrice)}`}</small>
                </div>
              </div>
              <div className="flex justify-end lg:mt-4 mt-12">
                <Button variant="fill" className="text-xs font-normal">{account.helper.details}</Button>
              </div>
            </article>
          )
        })}
      </section>
      <section className="my-5 lg:flex hidden">
        <h2 className="text-lg font-bold text-darkGreen/90">{account.transaction.title}</h2>
        <p className="text-darkGreen/75 text-sm">{account.transaction.message}</p>
      </section>
      <div className="max-w-fit bg-white p-5 rounded-md shadow-lg lg:flex flex-col hidden">
        <div className='max-w-md mb-5'>
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder={account.helper.search} />
          </div>
        </div>
        <div className="grid grid-cols-7 overflow-scroll">
          {account.transaction.keys.map((key) => (
            <div key={key} className="items-center place-items-center text-center  px-5 py-2">
              <p className="text-darkGreen/80 font-semibold lg:[text-wrap:balance] text-sm">{key}</p>
            </div>
          ))}
        </div>
        {transactions.map((transaction) => (
          <div key={transaction.client}
            className="grid grid-cols-7 overflow-scroll items-center place-items-center text-center border-y-1 border-gray-200  hover:bg-gray-50 px-5 py-2">
            <p className="text-darkGreen/50 font-semibold lg:[text-wrap:balance] text-sm">{transaction.client}</p>
            <span className={`text-white ${transaction.type === 'Venta' ? 'bg-pink-500' : 'bg-blue-300'} py-1 px-4 rounded-full text-xs mx-1 w-fit h-fit`}>
              {transaction.type}
            </span>
            <p className="text-darkGreen/50 font-semibold lg:[text-wrap:balance] text-sm">{transaction.property}</p>
            <p className="text-darkGreen/50 font-semibold lg:[text-wrap:balance] text-sm"> {transaction.location}</p>
            <p className="text-lightGreen font-semibold lg:[text-wrap:balance] text-sm">{transaction.active ? account.helper.active : account.helper.inactive}</p>
            <p className="text-darkGreen/50 font-semibold lg:[text-wrap:balance] text-sm">{transaction.step}</p>
            <Button variant="outline" className="border-prussianBlue text-prussianBlue text-sm w-fit self-center">{account.helper.details}</Button>
          </div>
        ))}
      </div>
      <footer className="flex flex-row  border-t-1 border-gray-500  justify-between px-10 mt-10 py-4 ">
        <RaiziaLogo width="100" color="gray" />
        <span className="text-gray-500 lg:text-sm text-xs text-right">{footer.watermark}</span>
      </footer>
    </article>
  )
}

export default Content;
