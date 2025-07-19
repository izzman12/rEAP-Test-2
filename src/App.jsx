function HomePage() {
  return (
    <div className="p-6 max-w-2xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-6 text-blue-700">Welcome to rEAP</h1>
      <p className="text-xl text-gray-800 mb-4">
        Effortless billing for Employee Assistance Programs.
      </p>
      <p className="text-md text-gray-600 mb-6">
        Say goodbye to paperwork and hello to fast, accurate submissions. rEAP streamlines provider billing for EAP claims—so you can focus on helping people, not chasing reimbursements.
      </p>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("select").value = "billing";
          document.querySelector("select").dispatchEvent(new Event("change", { bubbles: true }));
        }}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow"
      >
        Submit a Bill
      </a>
    </div>
  );
}
