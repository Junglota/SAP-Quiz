const questions = [
    {
        id: 1,
        text: "Which of the following apps can you use to extend the organizational data of an already existing material/product in SAP S/4HANA Cloud Public Edition?",
        options: [
            { id: "A", text: "Manage Product Master Data" },
            { id: "B", text: "Change Material" },
            { id: "C", text: "Create Material" },
            { id: "D", text: "Manage Source Data Products" }
        ],
        correctAnswers: ["A", "C"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 2,
        text: "Which tasks are mandatory before you can migrate data for a specific object?",
        options: [
            { id: "A", text: "You select the same migration method previously used for other objects" },
            { id: "B", text: "Predecessor objects have been migrated" },
            { id: "C", text: "Permission to migrate the data has been assigned" },
            { id: "D", text: "All previous migration projects are in the \"Finished\" status" }
        ],
        correctAnswers: ["B", "C"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 3,
        text: "Which of the following systems are used to implement SAP S/4HANA Cloud Public Edition for a customer?",
        options: [
            { id: "A", text: "Test system" },
            { id: "B", text: "Trial system" },
            { id: "C", text: "Development system" },
            { id: "D", text: "Starter system" },
            { id: "E", text: "Sandbox system" }
        ],
        correctAnswers: ["A", "C", "D"],
        note: "Note: There are 3 correct answers to this question."
    },
    {
        id: 4,
        text: "What do you use to collect the values that are entered into the configuration activities in SAP Central Business Configuration?",
        options: [
            { id: "A", text: "Business Driven Configuration Questionnaire" },
            { id: "B", text: "Availability and Dependencies of Solution Processes Excel" },
            { id: "C", text: "SAP Cloud ALM Requirements app" },
            { id: "D", text: "SAP Cloud ALM Processes app" }
        ],
        correctAnswers: ["A"],
        note: ""
    },
    {
        id: 5,
        text: "How can you create an inbound delivery in your S/4HANA Cloud system?",
        options: [
            { id: "A", text: "Manually, with reference to the purchase order" },
            { id: "B", text: "Automatically, by creating a supplier invoice with a scheduled job" },
            { id: "C", text: "Automatically, by receiving an advanced shipping notification from the vendor electronically" },
            { id: "D", text: "Automatically, generated based on the purchase order data by a background job" },
            { id: "E", text: "Manually, with reference to the post goods receipt" }
        ],
        correctAnswers: ["A", "C", "D"],
        note: "Note: There are 3 correct answers to this question."
    },
    {
        id: 6,
        text: "Which embedded support offerings can you make use of in the SAP Fiori Launchpad?",
        options: [
            { id: "A", text: "Assessment questions from the SAP Learning Hub" },
            { id: "B", text: "Recorded webinars from the SAP Learning Website" },
            { id: "C", text: "Recorded system simulations from the Learning Center" },
            { id: "D", text: "Digital assistance from generative Al (SAP Joule)" },
            { id: "E", text: "Video tutorials from the SAP Help Portal" }
        ],
        correctAnswers: ["B", "D", "E"],
        note: "Note: There are 3 correct answers to this question."
    },
    {
        id: 7,
        text: "Which scope item covers the requisitioning of raw materials and goods for production?",
        options: [
            { id: "A", text: "Requisitioning (18J)" },
            { id: "B", text: "Procurement of Direct Materials (J45)" },
            { id: "C", text: "Consumable Purchasing (BNX)" },
            { id: "D", text: "Quality Management in Procurement (1FM)" }
        ],
        correctAnswers: ["B"],
        note: ""
    },
    {
        id: 8,
        text: "Which organizational units are categories of the business partner master data that is relevant for business partner roles Supplier and Supplier (Fin. Accounting)?",
        options: [
            { id: "A", text: "Company code data" },
            { id: "B", text: "Personnel Sub Area data" },
            { id: "C", text: "Country data" },
            { id: "D", text: "Purchasing organization data" }
        ],
        correctAnswers: ["A", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 9,
        text: "Which activities can you complete in the Maintain Business Roles SAP Fiori app?",
        options: [
            { id: "A", text: "Maintain technical catalogs" },
            { id: "B", text: "Assign PFCG profiles to a business role" },
            { id: "C", text: "Maintain restrictions" },
            { id: "D", text: "Assign business catalogs to a business role" }
        ],
        correctAnswers: ["C", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 10,
        text: "When using the Local SAP S/4HANA Database Schema migration approach, what is the maximum file size?",
        options: [
            { id: "A", text: "160 MB per file" },
            { id: "B", text: "100 MB per ZIP file" },
            { id: "C", text: "100 MB per file" },
            { id: "D", text: "160 MB per ZIP file" }
        ],
        correctAnswers: ["B", "C"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 11,
        text: "Which of the following specifications are valid for review activities in Purchase Requisition Approval Workflow?",
        options: [
            { id: "A", text: "Only one reviewer per workflow can be assigned" },
            { id: "B", text: "Deadlines can be configured for reviewer tasks" },
            { id: "C", text: "Reviewer receives notifications on the reviewer tasks" },
            { id: "D", text: "Assigned reviewer can reject or approve the workflow" }
        ],
        correctAnswers: ["B", "C"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 12,
        text: "Which of the following can you do with Automated Invoice Settlement (2LH)?",
        options: [
            { id: "A", text: "Schedule a job that will periodically settle invoices." },
            { id: "B", text: "Post the appropriate invoices yourself while using evaluated receipt settlement." },
            { id: "C", text: "Use the evaluated receipt settlement without the supplier's approval." },
            { id: "D", text: "Settle the created goods movements without receipt of an invoice." }
        ],
        correctAnswers: ["A", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 13,
        text: "An SAP Fiori app isn't displaying on the SAP Fiori Launchpad even though the business role granting permission to the app is correctly assigned to the user. How would you troubleshoot?",
        options: [
            { id: "A", text: "Check the business catalogues assigned to the role." },
            { id: "B", text: "Check the restrictions for the role." },
            { id: "C", text: "Check the space and page(s) assigned to the role." },
            { id: "D", text: "Check the Role Maintenance app." },
            { id: "E", text: "Check the business role template." }
        ],
        correctAnswers: ["A", "B", "C"],
        note: "Note: There are 3 correct answers to this question."
    },
    {
        id: 14,
        text: "In which type of extensibility is the SAP Business Technology Platform used to host a custom extension?",
        options: [
            { id: "A", text: "Classic extensibility" },
            { id: "B", text: "Side-by-side extensibility" },
            { id: "C", text: "Key user extensibility" },
            { id: "D", text: "Developer extensibility" }
        ],
        correctAnswers: ["B"],
        note: ""
    },
    {
        id: 15,
        text: "Which technologies should you use to integrate SAP S/4HANA Cloud Public Edition with another SAP public cloud solution?",
        options: [
            { id: "A", text: "SAP Integration Suite" },
            { id: "B", text: "SAP Cloud Connector" },
            { id: "C", text: "SAP Process Orchestration" },
            { id: "D", text: "Predelivered APIs" }
        ],
        correctAnswers: ["A", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 16,
        text: "What does the task list in My Outbox show?",
        options: [
            { id: "A", text: "Your completed and suspended tasks." },
            { id: "B", text: "Your tasks that the deadline were passed." },
            { id: "C", text: "Your tasks that are not completed yet." },
            { id: "D", text: "Your tasks that are to be sent to your manager." }
        ],
        correctAnswers: ["A"],
        note: ""
    },
    {
        id: 17,
        text: "Through which component do you access your assigned process tasks from the SAP Activate Roadmap of SAP S/4HANA Cloud Public Edition(3-system landscape)?",
        options: [
            { id: "A", text: "SAP Central Business Configuration" },
            { id: "B", text: "SAP Cloud ALM for Service" },
            { id: "C", text: "SAP Cloud ALM for Implementation" },
            { id: "D", text: "SAP Cloud ALM for Operations" }
        ],
        correctAnswers: ["C"],
        note: ""
    },
    {
        id: 18,
        text: "How does an implementation consultant support customer experts during Fit-to-Standard workshops?",
        options: [
            { id: "A", text: "Conduct end-user training on active scope items." },
            { id: "B", text: "Highlight areas that require configuration or customization decisions." },
            { id: "C", text: "Determine set up instructions for customer-driven integrations." },
            { id: "D", text: "Demonstrate SAP Best Practice business processes in the starter system." }
        ],
        correctAnswers: ["B", "C"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 19,
        text: "Where is the initial list of known integrations documented?",
        options: [
            { id: "A", text: "In the Business Driven Configuration Questionnaire" },
            { id: "B", text: "In SAP Cloud ALM" },
            { id: "C", text: "In the Digital Discovery Assessment" },
            { id: "D", text: "In the Fit-to-Standard Workshops" }
        ],
        correctAnswers: ["C"],
        note: ""
    },
    {
        id: 20,
        text: "When do you specify the data retention period in the SAP S/4HANA Migration Cockpit?",
        options: [
            { id: "A", text: "When the project status is \"Completed\"" },
            { id: "B", text: "When the project status is \"Finished\"" },
            { id: "C", text: "When the project status in \"In Progress\"" },
            { id: "D", text: "When the project status is \"Not Started\"" }
        ],
        correctAnswers: ["B"],
        note: ""
    },
    {
        id: 21,
        text: "Which of the values are mandatory when creating purchase orders in procurement of stock material?",
        options: [
            { id: "A", text: "Purchasing organization" },
            { id: "B", text: "Cost center" },
            { id: "C", text: "Account assignment category" },
            { id: "D", text: "Material number" }
        ],
        correctAnswers: ["A", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 22,
        text: "What have SAP S/4HANA Cloud Business Workflows been designed for?",
        options: [
            { id: "A", text: "To create cross-product workflow procedures" },
            { id: "B", text: "To create business processes with a high number of people involved in a pre-defined sequence" },
            { id: "C", text: "To create very simple release or approval procedures" },
            { id: "D", text: "To create complex, repeated work processes with iterative cycles" },
            { id: "E", text: "To create standard procedures from SAP Signavio Process Navigator" }
        ],
        correctAnswers: ["A", "B", "C"],
        note: "Note: There are 3 correct answers to this question."
    },
    {
        id: 23,
        text: "Which layer of SAP S/4HANA provides a universal language to read and process data across different applications?",
        options: [
            { id: "A", text: "SAP Business Suite" },
            { id: "B", text: "Core Data Services" },
            { id: "C", text: "SAP HANA" },
            { id: "D", text: "SAP Fiori" }
        ],
        correctAnswers: ["B"],
        note: ""
    },
    {
        id: 24,
        text: "Which of the following is a business partner category for Business Partner master data in SAP S/4HANA Cloud Public Edition?",
        options: [
            { id: "A", text: "Supplier" },
            { id: "B", text: "Customer" },
            { id: "C", text: "Organization" },
            { id: "D", text: "Person" }
        ],
        correctAnswers: ["A", "B"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 25,
        text: "What does the material type in a material (product) master data control?",
        options: [
            { id: "A", text: "Price unit that is used for a material" },
            { id: "B", text: "Procurement type that is allowed for a material" },
            { id: "C", text: "Organizational data that is allowed for a material" },
            { id: "D", text: "Automatic creation of a purchase requisition with a material" }
        ],
        correctAnswers: ["B"],
        note: ""
    },
    {
        id: 26,
        text: "How can you migrate data to SAP S/4HANA Cloud Public Edition?",
        options: [
            { id: "A", text: "With XML or CSV templates" },
            { id: "B", text: "With Core Data Services" },
            { id: "C", text: "With the zero downtime service" },
            { id: "D", text: "With a separate SAP HANA database" }
        ],
        correctAnswers: ["A", "B"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 27,
        text: "Which job template can you use for automated invoice settlement when you schedule supplier invoice jobs?",
        options: [
            { id: "A", text: "Schedule Supplier Invoice Output" },
            { id: "B", text: "Evaluated Receipt Settlement" },
            { id: "C", text: "Consignment and Pipeline Settlement" },
            { id: "D", text: "Automatic Delivery Cost Settlement" }
        ],
        correctAnswers: ["B"],
        note: ""
    },
    {
        id: 28,
        text: "What field must be maintained when you create a purchase contract?",
        options: [
            { id: "A", text: "Warehouse number" },
            { id: "B", text: "Purchasing info record" },
            { id: "C", text: "Purchasing organization" },
            { id: "D", text: "Supplier" }
        ],
        correctAnswers: ["C", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 29,
        text: "What are the key process flows of service procurement?",
        options: [
            { id: "A", text: "Manage invoices" },
            { id: "B", text: "Manage purchase orders" },
            { id: "C", text: "Manage service entry sheets" },
            { id: "D", text: "Manage service contracts" },
            { id: "E", text: "Maintain quota arrangements" }
        ],
        correctAnswers: ["A", "B", "C"],
        note: "Note: There are 3 correct answers to this question."
    },
    {
        id: 30,
        text: "What activities are applied to the entire system and cannot be changed after confirmation in SAP Central Business Configuration?",
        options: [
            { id: "A", text: "Scoping" },
            { id: "B", text: "Fiscal year variant" },
            { id: "C", text: "Configuration activities" },
            { id: "D", text: "Group currency" }
        ],
        correctAnswers: ["B", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 31,
        text: "What is a Purchasing Info Record?",
        options: [
            { id: "A", text: "A master data record that contains information specific to a material and the purchase order." },
            { id: "B", text: "A master data record that contains information specific to a material and the supplier." },
            { id: "C", text: "A master data record that contains information specific to a material and the customer." },
            { id: "D", text: "A master data record that contains information specific to a material and the contract." }
        ],
        correctAnswers: ["B"],
        note: ""
    },
    {
        id: 32,
        text: "When you create a purchasing organization in your organizational structure, which of the following assignments is a must?",
        options: [
            { id: "A", text: "Purchase organization to storage location" },
            { id: "B", text: "Purchase organization to distribution channel" },
            { id: "C", text: "Purchase organization to plant" },
            { id: "D", text: "Purchase organization to company code" }
        ],
        correctAnswers: ["D"],
        note: ""
    },
    {
        id: 33,
        text: "What do you need to create to test APIs on your SAP S/4HANA Cloud Public Edition system using the SAP Business Accelerator Hub?",
        options: [
            { id: "A", text: "A communication system" },
            { id: "B", text: "A communication arrangement" },
            { id: "C", text: "A communication scenario" },
            { id: "D", text: "An API" }
        ],
        correctAnswers: ["A", "B"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 34,
        text: "Which of the following are purchasing info record categories?",
        options: [
            { id: "A", text: "Standard" },
            { id: "B", text: "Pipeline" },
            { id: "C", text: "Service" },
            { id: "D", text: "External" }
        ],
        correctAnswers: ["A", "C"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 35,
        text: "How can you define the relationship between business roles and business catalogs?",
        options: [
            { id: "A", text: "A business catalog restricts access to one or more business roles." },
            { id: "B", text: "A business catalog is a collection of one or more business roles." },
            { id: "C", text: "A business role restricts access to one or more business catalogs." },
            { id: "D", text: "A business role is a collection of one or more business catalogs." }
        ],
        correctAnswers: ["B"],
        note: ""
    },
    {
        id: 36,
        text: "Which of the following is a mandatory field to create a purchase order for consumables?",
        options: [
            { id: "A", text: "Material Number" },
            { id: "B", text: "Account Assignment Category" },
            { id: "C", text: "Item Category" },
            { id: "D", text: "Purchase Info Record" }
        ],
        correctAnswers: ["B"],
        note: ""
    },
    {
        id: 37,
        text: "How can you open a new posting period for material master records?",
        options: [
            { id: "A", text: "By closing the current period using the Close Periods app." },
            { id: "B", text: "By triggering a background job using Close Period for Product Master app" },
            { id: "C", text: "By using the Manage Product Master Data app." },
            { id: "D", text: "By using Manage Posting Periods app." }
        ],
        correctAnswers: ["A", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 38,
        text: "In the Price for Request (1XF) Process, using the Manage Supplier Quotations SAP Fiori app, which follow-on documents can be created after awarding a quotation?",
        options: [
            { id: "A", text: "Purchase Contract" },
            { id: "B", text: "Purchase Requisition" },
            { id: "C", text: "Scheduling Agreement" },
            { id: "D", text: "Purchase Order" }
        ],
        correctAnswers: ["C", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 39,
        text: "Which of the following are sources of supply for a purchasing document?",
        options: [
            { id: "A", text: "Purchase requisition" },
            { id: "B", text: "Contract" },
            { id: "C", text: "Request for quotation" },
            { id: "D", text: "Purchase info record" }
        ],
        correctAnswers: ["B", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 40,
        text: "In SAP Central Business Configuration, which activities can you perform in the Product-Specific Configuration Phase?",
        options: [
            { id: "A", text: "Add blocking reasons for billing." },
            { id: "B", text: "Create new scope items." },
            { id: "C", text: "Change approval thresholds." },
            { id: "D", text: "Add new sales organizations." },
            { id: "E", text: "Modify building blocks." }
        ],
        correctAnswers: ["A", "C", "D"],
        note: "Note: There are 3 correct answers to this question."
    },
    {
        id: 41,
        text: "What is the correct SAP Fiore app to create purchase contracts with reference to purchase requisitions?",
        options: [
            { id: "A", text: "Manage Purchase Requisitions Professional" },
            { id: "B", text: "Process Purchase Requisitions" },
            { id: "C", text: "Assign and Process Purchase Requisitions" },
            { id: "D", text: "Manage Purchase Contracts" }
        ],
        correctAnswers: ["C"],
        note: ""
    },
    {
        id: 42,
        text: "After integration requirements have been finalized, what is used to analyze, design, and document the integration strategy?",
        options: [
            { id: "A", text: "Integration Solution Advisory Methodology" },
            { id: "B", text: "Integration and API List" },
            { id: "C", text: "SAP Business Accelerator Hub" },
            { id: "D", text: "SAP Cloud ALM Requirements app" }
        ],
        correctAnswers: ["A"],
        note: ""
    },
    {
        id: 43,
        text: "What is the correct release code for the second feature delivery in February 2025?",
        options: [
            { id: "A", text: "2025.2" },
            { id: "B", text: "2502.2" },
            { id: "C", text: "2522" },
            { id: "D", text: "2025.2.2" }
        ],
        correctAnswers: ["B"],
        note: ""
    },
    {
        id: 44,
        text: "What is the purpose of the Redistribute Workload SAP Fiori app?",
        options: [
            { id: "A", text: "Reassign purchase orders to the purchasers" },
            { id: "B", text: "Reassign approval work items to relevant approvers" },
            { id: "C", text: "Reassign purchasing group in the purchasing documents" },
            { id: "D", text: "Reassign purchase requisitions to the purchasers" }
        ],
        correctAnswers: ["C"],
        note: ""
    },
    {
        id: 45,
        text: "What does a partner line of business configuration expert reference when identifying business processes to cover in the Fit-to-Standard workshops?",
        options: [
            { id: "A", text: "Business Driven Configuration Questionnaire" },
            { id: "B", text: "Digital Discovery Assessment" },
            { id: "C", text: "SAP Signavio Journey Modeler" },
            { id: "D", text: "SAP Signavio Process Collaboration Hub" }
        ],
        correctAnswers: ["B"],
        note: ""
    },
    {
        id: 46,
        text: "Which app enables you to categorize a material/product as compliance relevant?",
        options: [
            { id: "A", text: "Manage Product Master Data" },
            { id: "B", text: "Compliance Information - For Products" },
            { id: "C", text: "Create Procurement Products" },
            { id: "D", text: "Create Material" }
        ],
        correctAnswers: ["A"],
        note: ""
    },
    {
        id: 47,
        text: "What are some characteristics of public cloud?",
        options: [
            { id: "A", text: "Multi-tenant server" },
            { id: "B", text: "Software installation on customer site" },
            { id: "C", text: "Lower total cost of ownership" },
            { id: "D", text: "Perpetual license" }
        ],
        correctAnswers: ["A", "C"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 48,
        text: "You have assigned a business role to an end user who has been granted access to only one specific application. While you have a day off, it turns out that the app doesn't show up on the user's launchpad. What can the user do?",
        options: [
            { id: "A", text: "Assign a launchpad space to the business role." },
            { id: "B", text: "Create a page and assign it to the launchpad space." },
            { id: "C", text: "Use the search function to find the app." },
            { id: "D", text: "Assign a different business role that provides access." }
        ],
        correctAnswers: ["C"],
        note: ""
    },
    {
        id: 49,
        text: "Which document can you use as a reference while posting supplier invoices for lean services?",
        options: [
            { id: "A", text: "Service Purchase Order" },
            { id: "B", text: "Service Entry Sheet" },
            { id: "C", text: "Service Type Based Pricing Condition" },
            { id: "D", text: "Service Product Master Data" }
        ],
        correctAnswers: ["A", "B"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 50,
        text: "Which of the following activities are completed in the Realize phase of the SAP Activate Methodology?",
        options: [
            { id: "A", text: "Demonstrate where to find business process documentation" },
            { id: "B", text: "Gather perceived change impact feedback" },
            { id: "C", text: "Set up manual test cases in SAP Cloud ALM" },
            { id: "D", text: "Enter configuration values in SAP Central Business Configuration" }
        ],
        correctAnswers: ["C", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 51,
        text: "Which app can you use to create purchase orders manually For down payments in SAP SAHANA Cloud Public Edition?",
        options: [
            { id: "A", text: "Manage Purchase Orders" },
            { id: "B", text: "Create Supplier Down Payment Requests" },
            { id: "C", text: "Create Purchase Order? Advanced" },
            { id: "D", text: "Process Purchase Orders" }
        ],
        correctAnswers: ["C"],
        note: ""
    },
    {
        id: 52,
        text: "What can you monitor from the Procurement Overview Page?",
        options: [
            { id: "A", text: "Request for quotation items" },
            { id: "B", text: "Supplier EDI messages" },
            { id: "C", text: "Supplier confirmations" },
            { id: "D", text: "Purchase order items" },
            { id: "E", text: "Supplier down payments" }
        ],
        correctAnswers: ["A", "C", "D"],
        note: "Note: There are 3 correct answers to this question."
    },
    {
        id: 53,
        text: "Where do you find industry cloud solutions to address a customer's unique requirement?",
        options: [
            { id: "A", text: "SAP Store" },
            { id: "B", text: "SAP Discovery Center" },
            { id: "C", text: "SAP Business Technology Platform" },
            { id: "D", text: "SAP Signavio Process Navigator" }
        ],
        correctAnswers: ["A"],
        note: ""
    },
    {
        id: 54,
        text: "What are some characteristics of the SAP S/4HANA Migration Cockpit?",
        options: [
            { id: "A", text: "Mapping source values to SAP S/4HANA target values" },
            { id: "B", text: "Extensibility using the Legacy System Migration Workbench" },
            { id: "C", text: "Guidance and simulation of the migration process" },
            { id: "D", text: "Combining the local and remote schema approaches into one migration project" }
        ],
        correctAnswers: ["A", "C"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 55,
        text: "Based on the SAP Activate methodology, which activities must you perform in the Explore phase?",
        options: [
            { id: "A", text: "Use the Test system to demonstrate SAP Best Practice processes." },
            { id: "B", text: "Define the organizational structure and chart of accounts." },
            { id: "C", text: "Conduct the Digital Discovery Assessment to identify extension requirements." },
            { id: "D", text: "Conduct the Fit-to-Standard analysis to gather configuration values." }
        ],
        correctAnswers: ["C", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 56,
        text: "Which of the following actions can you do using the My Purchase Requisitions - New app?",
        options: [
            { id: "A", text: "Maintain some default values of purchase requisitions for your user" },
            { id: "B", text: "Copy any of your purchase requisitions to create new" },
            { id: "C", text: "Define approver for your purchase requisitions" },
            { id: "D", text: "Convert your purchase requisitions to purchase orders" }
        ],
        correctAnswers: ["A", "B"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 57,
        text: "Which functions are available with the SAP Business Accelerator Hub?",
        options: [
            { id: "A", text: "Transfer APIs" },
            { id: "B", text: "Create APIs" },
            { id: "C", text: "Search APIs" },
            { id: "D", text: "Test APIs" }
        ],
        correctAnswers: ["C", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 58,
        text: "Which of the following data are master data in SAP S14HANA Cloud Public Edition?",
        options: [
            { id: "A", text: "Supplier Invoice" },
            { id: "B", text: "Purchase Order" },
            { id: "C", text: "Material/Product" },
            { id: "D", text: "Supplier" }
        ],
        correctAnswers: ["C", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 59,
        text: "Which of the following document can be used as a reference during invoice entry in sourcing and procurement?",
        options: [
            { id: "A", text: "Supplier invoice" },
            { id: "B", text: "Purchase order" },
            { id: "C", text: "Material document" },
            { id: "D", text: "Purchase requisition" }
        ],
        correctAnswers: ["B"],
        note: ""
    },
    {
        id: 60,
        text: "Where are the manual test cases created for customer User Acceptance Testing?",
        options: [
            { id: "A", text: "SAP Cloud ALM" },
            { id: "B", text: "SAP Signavio Process Navigator" },
            { id: "C", text: "SAP Solution Manager" },
            { id: "D", text: "Test Automation Tool" }
        ],
        correctAnswers: ["A"],
        note: ""
    },
    {
        id: 61,
        text: "From which document can you create an RFQ?",
        options: [
            { id: "A", text: "Scheduling Agreement" },
            { id: "B", text: "Purchase Requisition" },
            { id: "C", text: "Purchase Contract" },
            { id: "D", text: "Purchase Order" }
        ],
        correctAnswers: ["B"],
        note: ""
    },
    {
        id: 62,
        text: "Which tools does SAP provide to make it easier for customers to maintain their SAP S/4HANA Cloud systems after a release upgrade?",
        options: [
            { id: "A", text: "What's New Viewer Tool" },
            { id: "B", text: "SAP Signavio Process Navigator Tool" },
            { id: "C", text: "Release Assessment and Scope Dependency Tool" },
            { id: "D", text: "Test Automation Tool" }
        ],
        correctAnswers: ["A", "C"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 63,
        text: "What tools enable non-developers to create low/no-code extensions?",
        options: [
            { id: "A", text: "SAP Business Application Studio" },
            { id: "B", text: "SAP Build" },
            { id: "C", text: "SAP Cloud SDK" },
            { id: "D", text: "SAP Fiori extensibility apps" }
        ],
        correctAnswers: ["B", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 64,
        text: "In the Subcontracting solution process, how is the stock for the provided components managed?",
        options: [
            { id: "A", text: "The stock is managed as part of your own stock." },
            { id: "B", text: "The stock is managed at the storage location level." },
            { id: "C", text: "The stock is managed at the plant level." },
            { id: "D", text: "The stock is managed as part of supplier's own stock." }
        ],
        correctAnswers: ["A", "C"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 65,
        text: "For which of the following actions can you use the SAP Fiori app Manage Purchase Orders?",
        options: [
            { id: "A", text: "Convert your purchase requisitions to purchase orders" },
            { id: "B", text: "Create purchase orders for direct consumption" },
            { id: "C", text: "Edit the fields of multiple purchase orders simultaneously" },
            { id: "D", text: "Maintain some default values of purchase orders for your user" }
        ],
        correctAnswers: ["C"],
        note: ""
    },
    {
        id: 66,
        text: "How is the KP! Contract leakage percentage defined?",
        options: [
            { id: "A", text: "Spend of purchase orders without contract reference despite existing contract" },
            { id: "B", text: "Confirmed spend of purchase orders with contract reference" },
            { id: "C", text: "Confirmed quantity of purchase orders with contract reference" },
            { id: "D", text: "Quantity of purchase orders without contract reference despite existing contract" }
        ],
        correctAnswers: ["A"],
        note: ""
    },
    {
        id: 67,
        text: "Which of the following activities are part of the key process flow for Scheduling Agreements in Procurement (I3MR)?",
        options: [
            { id: "A", text: "Maintain quota arrangement" },
            { id: "B", text: "Create or change scheduling agreement" },
            { id: "C", text: "Monitor down payment process" },
            { id: "D", text: "Maintain service entry sheet" },
            { id: "E", text: "Maintain delivery schedule" }
        ],
        correctAnswers: ["A", "B", "E"],
        note: "Note: There are 3 correct answers to this question."
    },
    {
        id: 68,
        text: "In which SAP Activate methodology phase do consultants configure business processes based on the information gathered in the Fit-to-Standard workshops?",
        options: [
            { id: "A", text: "Prepare" },
            { id: "B", text: "Explore" },
            { id: "C", text: "Realize" },
            { id: "D", text: "Deploy" }
        ],
        correctAnswers: ["C"],
        note: ""
    },
    {
        id: 69,
        text: "Which of the following reasons can an employee select to dismiss a situation message using My Situations app?",
        options: [
            { id: "A", text: "Invalid" },
            { id: "B", text: "Approve" },
            { id: "C", text: "Reject" },
            { id: "D", text: "Resolved" },
            { id: "E", text: "Obsolete" }
        ],
        correctAnswers: ["A", "D", "E"],
        note: "Note: There are 3 correct answers to this question."
    },
    {
        id: 70,
        text: "In which application can you see the available business context capacity remaining for extension items?",
        options: [
            { id: "A", text: "Extensibility Cockpit app" },
            { id: "B", text: "Extensibility Inventory app" },
            { id: "C", text: "Custom Reusable Elements app" },
            { id: "D", text: "Extensibility Explorer app" }
        ],
        correctAnswers: ["A"],
        note: ""
    },
    {
        id: 71,
        text: "What must you create when you build an integration scenario using the SAP Fiori Communication Management apps in SAP S/4HANA Cloud. Public Edition?",
        options: [
            { id: "A", text: "Communication arrangement" },
            { id: "B", text: "Communication interface" },
            { id: "C", text: "Communication API" },
            { id: "D", text: "Communication system" }
        ],
        correctAnswers: ["A", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 72,
        text: "If a customer wants to develop their own custom application and integrate it with SAP S/4HANA Cloud Public Edition, what tools would you recommend to develop the app?",
        options: [
            { id: "A", text: "SAP Business Application Studio" },
            { id: "B", text: "SAP Build" },
            { id: "C", text: "SAP HANA Cloud" },
            { id: "D", text: "SAP Cloud Portal Service" }
        ],
        correctAnswers: ["A", "B"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 73,
        text: "What is the characteristic of consignment in the Supplier Consignment (2LG) process?",
        options: [
            { id: "A", text: "A supplier stores your material in its premises but has no liability on the consignment stock." },
            { id: "B", text: "A supplier provides you with material with agreed periods that is stored in its premises." },
            { id: "C", text: "A supplier provides you with material that is stored on your premises but is still the property of the supplier." },
            { id: "D", text: "A supplier provides you with material with agreed periods and you have the liability of the consignment stock." }
        ],
        correctAnswers: ["C"],
        note: ""
    },
    {
        id: 74,
        text: "Which of the following are captured in a completed Digital Discovery Assessment?",
        options: [
            { id: "A", text: "Target customer go-live date" },
            { id: "B", text: "SAP Fiori application extensions" },
            { id: "C", text: "Business role requirements" },
            { id: "D", text: "Known integration requirements" }
        ],
        correctAnswers: ["C", "D"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 75,
        text: "You want to inform purchasers automatically when an RFQ is close to the quotation deadline but only a low number of supplier quotations have been received. How can you notify purchasers easily in SAP S/4HANA Cloud Public Edition?",
        options: [
            { id: "A", text: "By using the situation template in situation handling standard framework" },
            { id: "B", text: "By defining a workflow using flexible workflows" },
            { id: "C", text: "By developing an application using APIs to send notifications" },
            { id: "D", text: "By creating new RFQs and sending with email" }
        ],
        correctAnswers: ["A"],
        note: ""
    },
    {
        id: 76,
        text: "You need to create purchasing groups in your SAP S/4HANA Cloud Public Edition system that are relevant to your company. Which of the following assignments for purchasing groups is required?",
        options: [
            { id: "A", text: "Purchasing group is not assigned to any organizational unit in the company structure" },
            { id: "B", text: "You must assign the purchasing group to the plant" },
            { id: "C", text: "You must assign the purchasing group to the company code" },
            { id: "D", text: "You must assign the purchasing group to the responsible purchasing organization" }
        ],
        correctAnswers: ["A"],
        note: ""
    },
    {
        id: 77,
        text: "You are recording actions for a custom process step in a test automate. When do you press the \"Read\" button on the recording panel?",
        options: [
            { id: "A", text: "To capture a static label on the screen that should be checked during test execution." },
            { id: "B", text: "To capture an error message on the screen that can be used later." },
            { id: "C", text: "To capture text in a message screen that can be used for data binding later." },
            { id: "D", text: "To capture a value in a text field that should be stored as a variable." }
        ],
        correctAnswers: ["A", "C"],
        note: "Note: There are 2 correct answers to this question."
    },
    {
        id: 78,
        text: "What provides a foundation for the SAP Cloud ERP where integrations and extensions live?",
        options: [
            { id: "A", text: "SAP Discovery Center" },
            { id: "B", text: "SAP Business Accelerator Hub" },
            { id: "C", text: "SAP ABAP Environment" },
            { id: "D", text: "SAP Business Technology Platform" }
        ],
        correctAnswers: ["D"],
        note: ""
    },
    {
        id: 79,
        text: "Which of the following analyses can you create from the Manage KPIs and Reports app?",
        options: [
            { id: "A", text: "Review Booklets" },
            { id: "B", text: "Lumira Dashboards" },
            { id: "C", text: "Multidimensional Reports" },
            { id: "D", text: "SAC Stories" },
            { id: "E", text: "Object Views" }
        ],
        correctAnswers: ["A", "C", "D"],
        note: "Note: There are 3 correct answers to this question."
    },
    {
        id: 80,
        text: "If you cannot find a prepackaged solution process that addresses integration requirements in SAP Signavio Process Navigator, where do you look next?",
        options: [
            { id: "A", text: "SAP Cloud ALM" },
            { id: "B", text: "SAP Business Accelerator Hub" },
            { id: "C", text: "SAP Discovery Center" },
            { id: "D", text: "SAP Business Technology Platform" }
        ],
        correctAnswers: ["B"],
        note: ""
    }];