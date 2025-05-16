//import the automatic scroll
import CustomNavProps from "../components/CustomNavProps";

export default function DummyScrollPage() {
  return (
    <>
      <div>
        {/* header container */}
        <div className="flex justify-between items-center p-5">
          <h1 className="font-aeonik text-2xl">Dummy Logo</h1>
          {/* nav container */}
          <div className="flex gap-3 font-dmsans">
            <CustomNavProps
              to="/dummyplan"
              label="Hero"
              className="font-semibold"
              activeClassName="text-gray-500"
              inactiveClassName="text-moss-black hover:text-gray-500"
              scrollToId="hero-section" // make sure an element has this ID
              scrollOffset={100}
            />

            <CustomNavProps
              to="/dummyplan"
              label="Contacts"
              className="font-semibold"
              activeClassName="text-gray-500"
              inactiveClassName="text-moss-black hover:text-gray-500"
              scrollToId="contacts-section" // make sure an element has this ID
              scrollOffset={100}
            />

            <CustomNavProps
              to="/dummyplan"
              label="Services"
              className="font-semibold"
              activeClassName="text-gray-500"
              inactiveClassName="text-moss-black hover:text-gray-500"
              scrollToId="services-section" // make sure an element has this ID
              scrollOffset={100} // make sure an element has this ID
            />
          </div>
        </div>
      </div>
    </>
  );
}
