import { communityLinks, platformLinks, resourcesLinks } from "../constants"


const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="flex flex-wrap gap-y-12">
            <div className="w-full sm:w-1/2 lg:w-1/3">
                <h3 className="text-md font-semibold mb-2">Resources</h3>
                <ul>
                    {resourcesLinks.map((resource, key)=>(
                        <li key={key}>
                            <a href={resource.href} className="text-neutral-300 hover:text-white">{resource.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3">
                <h3 className="text-md font-semibold mb-2">Platform</h3>
                <ul>
                    {platformLinks.map((platform, key)=>(
                        <li key={key}>
                            <a href={platform.href} className="text-neutral-300 hover:text-white">{platform.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3">
                <h3 className="text-md font-semibold mb-2">Community</h3>
                <ul>
                    {communityLinks.map((community, key)=>(
                        <li key={key}>
                            <a href={community.href} className="text-neutral-300 hover:text-white">{community.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer