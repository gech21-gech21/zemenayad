import React from "react";

const page = () => {
  return (
    <div className="container">
      <div>
        <h1 className="text-center font-bold text-3xl mb-8">About Us</h1>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section className="mb-10">
            <p className="text-lg mb-6">
              Zemenay Ad is a classified website offering innovative marketing
              solutions for sellers and a seamless experience for buyers across
              Ethiopia. Our user-friendly platform allows anyone to post items
              for sale (except products not supported by our guidelines).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              Why We are Different
            </h2>
            <p className="mb-4">
              When registered sellers post products on our platform, we
              automatically create targeted Facebook ads to maximize audience
              reach. This unique feature helps sellers connect with the most
              relevant potential customers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Ownership</h2>
            <p>
              Zemenay Ad is owned and operated by Wongel Alemayehu, an expert
              with extensive experience in:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Ad management</li>
              <li>Data-driven digital advertising strategy</li>
              <li>Classified website management</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
