import { Container } from '@/components/Container'

const stats = [
  { id: 1, name: 'monthly visits to our websites', value: '5 000 000+' },
  { id: 2, name: 'of industry experience', value: '15 Years' },
  { id: 3, name: 'in total ad spend', value: '$100 000 000+' }
]

export function Impact() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-blue-600 py-12"
    >
      <Container className="relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Results-Driven Marketing Excellence</h2>
            <p className="mt-4  leading-7 text-lg  text-white">
            Experience the impact of our customized strategies and proven success across varied industries in accomplishing your marketing objectives and propelling your business forward. 
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                <dt className="text-lg font-normal leading-6 text-white">{stat.name}</dt>
                <dd className="order-first text-3xl font-bold sm:text-4xl tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      </Container>
    </section>
  )
}




