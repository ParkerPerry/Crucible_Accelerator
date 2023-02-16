// ==UserScript==
// @name         Crucible Accelerator
// @namespace    Crucible Accelerator
// @version      3.5
// @description  Adds prewritten questions for both FTR's and SDP's and includes a export feature
// @author       eshaaa, pvvargh, perrpark, sheakram
// @include      https://crucible.apn.a2z.com/*
// @include      https://crucible-alpha.apn.a2z.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        GM.addStyle
// @grant        GM_info
// @grant        GM.info
// ==/UserScript==




///// Added Sheakram@ AutoSelectButtons script for added functionality
var input = document.createElement("input");
input.type = "button";
input.value = "YesToALL";
input.onclick = showAlert;
document.body.prepend(input);
function showAlert() {
    var btns = document.querySelectorAll('input[type="radio"]')
    for (var i = 0; i < btns.length; i++) {
        if (btns[i].value == "Yes") {
            btns[i].nextElementSibling.click()
        }
    }
}

///// Crucible Accelerator //////



console.log("adding Crucible sidenav button");
var sidenav = document.getElementsByClassName("page-header-left")[0];
var btnCrucibleAccelerator = document.createElement("button");
btnCrucibleAccelerator.innerHTML = "Crucible Accelerator";
btnCrucibleAccelerator.className = "awsui-button awsui-button-variant-primary awsui-hover-child-icons";

btnCrucibleAccelerator.addEventListener(
      "click",
      function() {
        //setTBRQuestions();
        insertButton();
      },
      false
    );

sidenav.appendChild(btnCrucibleAccelerator);
console.log("added sidenav button");

function insertButton() {
  var reviewName = document.getElementsByClassName("awsui-form-title")[0]
    .innerText;
	console.log(reviewName);
    console.log("Add accelerator for Crucible");
    //Add export button
    //btnSubmitClass = "awsui-side-navigation__list awsui-side-navigation__list--root";
    var btnSubmitClass = "page-header-right";
    var btnSubmit = document.getElementsByClassName(btnSubmitClass);
    //console.log( btnSubmit[0]);
    var btnExport = document.createElement("button");
    btnExport.innerHTML = "Add Crucible Addl QA";
    btnExport.className =
      "awsui-button awsui-button-variant-primary awsui-hover-child-icons";
    btnExport.addEventListener(
      "click",
      function() {
        //setTBRQuestions();
        InsertAddlQuestions();
      },
      false
    );

    var btnExpandAddlOptions = document.createElement("button");
    btnExpandAddlOptions.innerHTML = "Expand Addl Options";
    btnExpandAddlOptions.className =
      "awsui-button awsui-button-variant-primary awsui-hover-child-icons";
    btnExpandAddlOptions.addEventListener(
      "click",
      function() {
        expandAddlOptions();
      },
      false
    );

    btnSubmit[0].appendChild(btnExport);
    btnSubmit[0].appendChild(btnExpandAddlOptions);

    var btnCancel = document.getElementsByClassName("awsui-form-actions")[0]
      .childNodes[0].childNodes[0].childNodes[0];

    var btnExportData = document.createElement("button");
    btnExportData.innerHTML = "Export Addl QA";
    btnExportData.className =
      "awsui-button awsui-button-variant-primary awsui-hover-child-icons";
    btnExportData.addEventListener(
      "click",
      function() {
        //setTBRQuestions();
        ExportAddlQuestions();
      },
      false
    );

    console.log("add export");
    btnCancel.appendChild(btnExportData);
    console.log("add export.2");
}

function expandAddlOptions() {
  //awsui-expandable-section-content awsui-expandable-section-content-default
  var addlOptionElements = document.getElementsByClassName(
    "awsui-expandable-section-content awsui-expandable-section-content-default"
  );
  for (var i = 0; i < addlOptionElements.length; i++) {
    addlOptionElements[i].className =
      "awsui-expandable-section-content awsui-expandable-section-content-default awsui-expandable-section-content-expanded";
  }
}

//////////////////////////////////////////////////////////


function InsertAddlQuestions() {
  expandAddlOptions();


// # SDP Specific Service Requirements #

// BaselineType: Service Delivery
// Service: AmazonAPIGateway
// Version: May 2020 - 2.0
var requirementID = "APIGW-001";
  var question =
    "# What type of features are you looking for in using <insert API type here>?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "APIGW-002";
  question =
    "# Do you use any Lambda functions to passs data from a RESTful API to AWS services?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "APIGW-002";
  question =
    "# If so, do these functions execute any additional logic?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "APIGW-002";
  question =
    "# If so, could that logic be expressed in a mapping template instead?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "APIGW-002";
  question =
    "# What value is Lambda adding?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "APIGW-003";
  question =
    "# For what reasons did you choose <insert endpoint type> for your workload?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "APIGW-004";
  question =
    "# What protections do you have in place to handle and mitigate excessive loads?";
    AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "APIGW-004";
  question =
    "# Please describe your approach for determining throttles, quotas, cache TTL, etc.";
    AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "APIGW-005";
  question =
    "# Please elabaorate on the associated common requirements.";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "APIGW-006";
  question =
    "# Which of the included features does your solution use?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "APIGW-006";
  question =
    "# How are these features integrated into your solution?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "APIGW-006";
  question =
    "# Why did you choose to use <insert feature> in your workload?";
  AppendTBRQAInAddlOption(requirementID, question);

// BaselineType: Service Delivery
// Service: CloudFront
// Version: May 2020 - 2.0

  requirementID = "CFN-001";
  question =
    "# Which deployment method was chosen for the customer and how did you plan and test for that deployment? How was this architected?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CFN-002";
  question =
    "# Which advanced workload use case was required for each use case?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CFN-002";
  question =
    "# How did you plan for this? How did the customer accept the solution?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CFN-003";
  question =
    "# Which native functionalities were utilized through this CloudFormation template?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CFN-004";
  question =
    "# Do you use CloudFormation modules for resource reuse?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CFN-004";
  question =
    "# Are any of these modules nested or referenced cross-stack?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CFN-005";
  question =
    "# How do you utilize parameters and parameter groups in your solution?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CFN-006";
  question =
    "# What outputs does your CloudFormation declare?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CFN-006";
  question =
    "# How are these outputs used?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CFN-007";
  question =
    "# What version control system are you using to manage CloudFormation templates?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CFN-007";
  question =
    "# What is the process for changing CloudFormation templates, and how are those stack updates deployed?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CFN-008";
  question =
    "# Do you use any custom names in your CloudFormation templates?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CFN-009";
  question =
    "# Have you validated your template using cfn-python-lint?";
  AppendTBRQAInAddlOption(requirementID, question);

 // BaselineType: Service Delivery
// Service: Connect
// Version: August 2020 - 2.0

  requirementID = "CON-001";
  question =
    "# What are the numbers of agents using this solution?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CON-001";
  question =
    "# Can you provide a description of the contact flows created?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CON-001";
  question =
    "# Can you provide a description of Amazon Connect integration with other solutions?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "CON-001";
  question =
    "# Can you confirm the deployment is a migration or a new installation?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "CON-001";
  question =
    "# Since your solution is leveraging Amazon Lex, can you provide more information on how it integrates with customer's internal systems?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "CON-001";
  question =
    "# Can you provide details on Historical and real-time reporting solutions?";
  AppendTBRQAInAddlOption(requirementID, question);

   requirementID = "CON-002";
  question =
    "# Can the partner describe the documentation content in the form of: cost, security, limitations, management of agent profiles/permissions, latency consideration (if any) and guidance on bandwidth requirements and increasing service limits?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CON-002";
  question =
    "# What is the process of increasing service limits in event of growth? How can customer check they have minimum bandwidth? How can customer route profiles?";
    AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "CON-002";
  question = " # Can you say more about the expected AWS usage fee? How have you given guidance around limitations on regional resilience?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "CON-002";
  question = "# Can you provide the Customer Readiness Guidelines document?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "CON-002";
  question = " # I don't see any guidance that was provided to the customer for any of the controls in the excel sheet provided. Can we specify the requirements you're referring to.";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "CON-002";
  question = "# Please provide the SOW document or information from the document for cost related information.";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "CON-002";
  question = "# Is there any guidance given to the customer on managing user profiles and permissions?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "CON-002";
  question = "# How do they handle onboarding new employees into the system?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "CON-002";
  question = "# Is there any PII being handled. Are encryption keys being stored in Secrets Manager, Systems Manager?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "CON-002";
  question = "# Did you discuss how to increase service limits in the event of growth?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "CON-002";
  question = "# Did you discuss Port/IP white list requirements with the customer?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CON-003";
  question =
    "# It seems only two features of contact flow are being incorporated. Please confirm the three features if this was missed out. Each case study must incorporate three or more of the listed Contact Flow features. If you can’t demonstrate three you may have to find a different case studyI need more detail on the features that were incorporated. How are these features being incorporated? What types of contact flows?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CON-004";
  question =
    "# Uses real-time and historical metric reporting. Are there any use of Agent Event Streams or Contact Search? Which API are you using to pull the real-time and historical metrics? Where are you viewing these metrics? Which historical metrics are you tracking? What APIs are you using to display and analyze the real-time/historical metrics? I need more detail on how each feature was enabled or demonstrated. Each case study must incorporate three or more of the listed Amazon Connect features. If you can’t demonstrate three you may have to find a different case study.";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CON-005";
  question =
    "# Your solution must be in production and you need to have 3 or more of these requirements implemented. Can you provide more information on which Amazon Connect Contact Attribute features were implemented? How does your solution utilize contact attribute features? Which 3 or more requirements does your solution satisfy? Each case study must incorporate three or more of the listed Amazon Connect Contact Attribute features. If you can’t demonstrate three you may have to find a different case studyCase study needs to incorporate at least three of the features from this requirement.";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CON-006";
  question =
    "# Please confirm if the customer had any call center system that they were utilizing before? If they were, please provide details on how the migration was carried out. Please provide migration details on how the Agents moved away from the legacy system to AWS Connect and if there was any temporary call forwarding setup. And finally how was the migration completed. What did this particular customer require, and what was the approach to meet the requirement?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CON-007";
  question =
    "# Each customer reference meets three or more of the listed service requirements. If you can’t demonstrate three you may have to find a different case study. Please add the all the controls you currently have in placeProvide specific example of one level of nesting for contact flows. Case study must meet at least 3 of the requirements from this section. There must be at least 5 lambda functions integrated with contact flows. Aside from number of agents and number of contact flows, are you meeting any of the other service requirements for this section?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CON-008";
  question =
    "# This control will need to be completed during a call. When will we schedule the live assessment? You must complete a live demo assessment in order to pass this validation. To be scheduled. The Amazon Connect team will do a 30 minute prep call with you, set up 2.5 hour live demo meeting and answer any questions.";
  AppendTBRQAInAddlOption(requirementID, question);

// BaselineType: Service Delivery
// Service: Lambda
// Version: May 2020 - 2.0

  requirementID = "LAM-001";
  question =
    "# What data flows are being handled? Please provide compute services used, what Lambda is being used for.";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "LAM-001";
  question =
    "# What kind of data flows are being handled? Please fully describe the workload and the compute tasks that Lambda is handling.";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "LAM-002";
  question =
    "# What is the purpose of the lambda functions that have been written? What do they do?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "LAM-003";
  question =
    "# How is the rollback process handled in the case of deployment issues?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "LAM-003";
  question =
    "# Is there a way to roll back at the application level?";
  AppendTBRQAInAddlOption(requirementID, question);

   requirementID = "LAM-003";
  question =
    "# In the case of an application code change (Lambda functions, elastic beanstalk) that result in issues/failures how does the application get deployed back to a healthy version?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "LAM-003";
  question =
    "# Is there any CI/CD tool this is integrated with?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "LAM-004";
  question =
    "# Are there any retry mechanisms built into the lambda functions?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "LAM-004";
  question =
    "# How are failed executions of lambda functions monitored, how are failed executions recovered from?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "LAM-004";
  question =
    "# How are failed executions of Lambda functions detected? Are there any retry mechanisms in place in the case a execution fails?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "LAM-004";
  question =
    "# How do metrics lead to actionable change in the system?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "LAM-004";
  question =
    "# How are failed jobs handled? What happens if Lambda fails midway through analysis?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "LAM-004";
  question =
    "# What happens if an execution fails? Are retries set up? Is the system designed such that failed lambda functions are not a threat to data integrity or users being able to use the system?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "LAM-005";
  question =
    "# How was capacity planning done for the application? Please provide a description of capacity planning and concurrency testing including how the decision to use unreserved concurrency was decided.";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "LAM-005";
  question =
    "# What load testing was done? What did the capacity planning process look like? What capacity planning was done? What would happen if utilization begins to spike? ";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "LAM-005";
  question =
    "# What capacity planning was done? What would happen if utilization begins to spike? ";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "LAM-006";
  question =
    "# What kind of static code analysis is being done? Are these vulnerabilities being scanned in dependencies or elsewhere? What tool are you using?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "LAM-006";
  question =
    "# How are IAM permissions being checked automatically?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "LAM-006";
  question =
    "# Can you walk me through what you look for and what tools you use for dependency vulnerability scanning at runtime? [RASP]";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "LAM-007";
  question =
    "# What does the CI/CD pipeline look like? How are deployments tested and deployed in detail?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "LAM-007";
  question =
    "# What kind of static code analysis is done? What does the analysis look for?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "LAM-007";
  question =
    "# Can you explain to me how it's being used in conjunction with a streaming service? What are the sources?";
  AppendTBRQAInAddlOption(requirementID, question);

// BaselineType: Service Delivery
// Service: RDS
// Version: October 2020 - 3.0

  requirementID = "RDS-001";
  question =
    "Can you please provide more infromation on the missing requirement?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-002";
  question =
    "# How is the application utilizing different read/write endpoints to optimize performance?";
    AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-002";
  question =
    "# What metrics are being tracked for in regards to performance for the RDS instance?";
    AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-002";
  question =
   "# How is TCO continuously being monitored and improved upon?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-003";
  question =
    "# How are logs being captured and analyzed? How is encryption being handled for the database?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "RDS-003";
  question =
    "# How has the password policy been implemented within MySQL?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-003";
  question =
        "# How is database encryption being managed with KMS?"
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-003";
  question =
        "# Is this done at a column level, database level?"
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-003";
  question =
        "# How do encryption configurations compare across non-prod and prod databases?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-004";
  question =
    "# How does the production deployment compare against the previous architecture?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-004";
  question =
    "# How does it meet the customer expectations?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-004";
  question =
    "# Could more information be provided on what requirements the customer went in with?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-004";
  question =
    "# Expected size, expected growth, connection requirements?";
 AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-004";
  question =
    "# Additionally could information be provided on any necessary tradeoffs made and how the final architecture lines up with the initial customer needs.";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-005";
  question =
    "# How did implementing multi-az meet customer requirements/acceptance testing?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-005";
  question =
    "# What customer acceptance testing was done to ensure that the Multi AZ deployment was meeting their stated requirements?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-006";
  question =
    "# How do you identify and classify sensitive data and how it is protected?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-007";
  question =
    "# What data is used in the non-prod databases?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-007";
  question =
    "# Is this generated synthetic data, sanitized production data?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-007";
  question =
    "# Are non production databases living on the same RDS PostgreSQL instances?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-007";
  question =
    "# How is access segregated between prod and non-prod environments?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-008";
  question =
    "# How was the decision for PostgreSQL RDS made over Aurora or other offerings?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-008";
  question =
    "# How was the choice of PostgreSQL and MySQL done?";
  AppendTBRQAInAddlOption(requirementID, question);

   requirementID = "RDS-008";
  question =
    "# Why was MS SQL not used on AWS?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-009";
  question =
    "# What are the backup retention policies for the database backups?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "RDS-009";
  question =
    "# How are endpoints designed to re-establish DB connections during fail over?";
  AppendTBRQAInAddlOption(requirementID, question);







// # Common Requirements #


    //ACCT-001
  requirementID = "ACCT-001";
  question =
    "# How did you guide the customer on securing the root user?";
  AppendTBRQAInAddlOption(requirementID, question);

  //ACCT-001
  requirementID = "ACCT-001";
  question =
    "# How is the root user being secured?";
  AppendTBRQAInAddlOption(requirementID, question);

  //ACCT-001
  requirementID = "ACCT-001";
  question = "# Were best practices in relation to AWS accounts passed on to the customer during the engagement (not using root account, using Cloudtrail, etc.)?";
  AppendTBRQAInAddlOption(requirementID, question);

  //ACCT-002
  requirementID = "ACCT-002";
  question = "# Were best practices in relation to AWS accounts passed on to the customer during the engagement (not using root account, using Cloudtrail, etc.)?";
  AppendTBRQAInAddlOption(requirementID, question);

  //ACCT-003
  requirementID = "ACCT-003";
  question = "# Is the S3 bucket in a separate administrative domain (different AWS account) with limited access?";
  AppendTBRQAInAddlOption(requirementID, question);
    //ACCT-003
  requirementID = "ACCT-003";
  question = "# Were best practices in relation to AWS accounts passed on to the customer during the engagement (not using root account, using Cloudtrail, etc.)?";
  AppendTBRQAInAddlOption(requirementID, question);
    //ACCT-003
  requirementID = "ACCT-003";
  question = "# Please confirm that there is some form of deletion protection on the Cloudtrail log files (MFA Delete, versioning, object lock) and that log file integrity validation is turned on.";
  AppendTBRQAInAddlOption(requirementID, question);
    //ACCT-003
  requirementID = "ACCT-003";
  question = "# Where doe the S3 bucket live? Is it in its own seperate audit/logging AWS account? Is some form of deletion protection enabled on the bucket?";
  AppendTBRQAInAddlOption(requirementID, question);

   //ACOM-001
  requirementID = "ACOM-001";
  question = "# Do you use AWS Organisations? Who receives the notifications from AWS?";
  AppendTBRQAInAddlOption(requirementID, question);

  //ACOM-002
  requirementID = "ACOM-002";
  question = "# What email and phone numbers are used?";
  AppendTBRQAInAddlOption(requirementID, question);

   //ARC-001
  requirementID = "ARC-001";
  question =
    "# Who has access to root user for all your AWS Accounts? How often is it used?";
  AppendTBRQAInAddlOption(requirementID, question);

  //ARC-003
  requirementID = "ARC-003";
  question = "# What is used for MFA?";
  AppendTBRQAInAddlOption(requirementID, question);

  //ARC-005
  requirementID = "ARC-005";
  question = "# Do you have a written Incident Response plan (IR) to regain root credentials in the event of misuse or MFA not working?";
  AppendTBRQAInAddlOption(requirementID, question);

   //BAR-001
  requirementID = "BAR-001";
  question = "# What is your Backup methodology?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "BAR-001";
  question = "# How often are the backups taken?";
  AppendTBRQAInAddlOption(requirementID, question);

  //BAR-002
  requirementID = "BAR-002";
  question = "# How often do you restore the backups to perform verification?";
  AppendTBRQAInAddlOption(requirementID, question);

   //CAA-001
  requirementID = "CAA-001";
  question = "# Does the workload access customer account?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "CAA-001";
  question = "# How does it access?";
  AppendTBRQAInAddlOption(requirementID, question);

 //COST-001
  requirementID = "COST-001";
  question = "# Can you provide a summary of the cost estimate that was given to the customer?";
  AppendTBRQAInAddlOption(requirementID, question);

  //COST-001
  requirementID = "COST-001";
  question = "# Was cost estimation of the solution provided to the customer prior to development?";
  AppendTBRQAInAddlOption(requirementID, question);

    //CTL-002
  requirementID = "CTL-002";
  question = "# Where is it stored (Separate Account/Partner Solution)";
  AppendTBRQAInAddlOption(requirementID, question);

  //CTL-003
  requirementID = "CTL-003";
  question = "# Who has access to your CloudTrail logs? How is it protected (MFA Delete/Versioning)?";
  AppendTBRQAInAddlOption(requirementID, question);

  //CTL-004
  requirementID = "CTL-004";
  question = "# Do you have CloudTrail log file integrity validation enabled?";
  AppendTBRQAInAddlOption(requirementID, question);

    //DOC-001
  requirementID = "DOC-001";
  question =
    "# Please provide the architecture diagram within the application.";
  AppendTBRQAInAddlOption(requirementID, question);

  //DR-001
  requirementID = "DR-001";
  question = "# What is your RPO for the application?";
  AppendTBRQAInAddlOption(requirementID, question);

   //DR-002
  requirementID = "DR-002";
  question = "# What is your RTO for the application?";
  AppendTBRQAInAddlOption(requirementID, question);

  //DR-004
  requirementID = "DR-004";
  question = "# What was the Last DR Test Date?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "DR-004";
  question = "# What was the Last DR test outcome?";
  AppendTBRQAInAddlOption(requirementID, question);

    //IAM-001
  requirementID = "IAM-001";
  question = "(Ignore for FTR)# How was the application requirements defined? What principals were created as part of the solution?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "IAM-001";
  question = "(Ignore for FTR)# What users/identities were created for partner to gain access to do necessary work?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "IAM-001";
  question = "(Ask during FTR)# How is Console Access done ? (native IAM/federated)";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "IAM-001";
  question = "(Ask during FTR)# What is the MFA tool being used?";
  AppendTBRQAInAddlOption(requirementID, question);

  //IAM-002
  requirementID = "IAM-002";
  question = "(Ignore for FTR) # Glad to hear they are following the principle of least privilege but could we have an example of how this is implemented within an IAM policy? This can be pseudo code or the policy itself.";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "IAM-002";
  question = "(Ignore for FTR) # Please provide an example of an IAM policy being used in the application. This can be an IAM policy or pseudo-code for how the policy is defined.";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "IAM-002";
  question = "(Ask during FTR)# Do you have any IAM Access Keys?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "IAM-002";
  question = "(Ask during FTR)# At what frequency are they rotated?";
  AppendTBRQAInAddlOption(requirementID, question);

  //IAM-003
  requirementID = "IAM-003";
  question = "# What is your password policy and how is re-use prevented?";
  AppendTBRQAInAddlOption(requirementID, question);

  //IAM-004
  requirementID = "IAM-004";
  question = "# Are there any accounts that share logins, like team logins, functional logins, apps sharing human logins etc?";
  AppendTBRQAInAddlOption(requirementID, question);

  //IAM-004
  requirementID = "IAM-004";
  question = "# How are you accessing a customers AWS account? Also, for static keys, are you provided rotation guidance?";
  AppendTBRQAInAddlOption(requirementID, question);

  //IAM-005
  requirementID = "IAM-005";
  question = "# How do you grant parties external to your company access to your AWS resources when necessary?";
  AppendTBRQAInAddlOption(requirementID, question);

  //IAM-006
  requirementID = "IAM-006";
  question = "# How do you determine who or what services gets access to what?";
  AppendTBRQAInAddlOption(requirementID, question);

  //IAM-007
  requirementID = "IAM-007";
  question = "# What is your offboarding process to modify or revoke access when an individual changes roles or leaves the company? Is it documented?";
  AppendTBRQAInAddlOption(requirementID, question);

  //IAM-008
  requirementID = "IAM-008";
  question = "# How often do you audit your IAM user identities and how is it done?";
  AppendTBRQAInAddlOption(requirementID, question);

  //IAM-009
  requirementID = "IAM-009";
  question = "# How do you manage credentials/secrets that your applications use?";
  AppendTBRQAInAddlOption(requirementID, question);

  //IAM-010
  requirementID = "IAM-010";
  question = "# Where do you store your secrets? Are they encrypted at rest?";
  AppendTBRQAInAddlOption(requirementID, question);

  //IAM-0011
  requirementID = "IAM-011";
  question = "# What tools are you using today for End User Authentication?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "IAM-011";
  question = "# What is the End-to-end data flow? (use arch diagram)";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "IAM-011";
  question = "# List down the AWS Services used in the architecture";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "IAM-011";
  question =
    "# List down the external AWS Services used in the architecture (e.g. MongoDB Atlas)";
  AppendTBRQAInAddlOption(requirementID, question);

  //IAM-012
  requirementID = "IAM-012";
  question = "# How do your AWS users authenticate to the system?( native IAM or SSO)? Do you have plans to move to an SSO based system?";
  AppendTBRQAInAddlOption(requirementID, question);

  //NETSEC-001
  requirementID = "NETSEC-001";
  question =
    "# Can you provide clarity on what it means by opening HTTP and HTTPS ports to anywhere? Could you provide an example configuration of the security group?";
  AppendTBRQAInAddlOption(requirementID, question);

  //NETSEC-002
  requirementID = "NETSEC-002";
  question =
    "# How are data stores being protected? How is traffic being encrypted?";
  AppendTBRQAInAddlOption(requirementID, question);
    //NETSEC-002
  requirementID = "NETSEC-002";
  question =
    "# Can you provide a summary of any endpoints exposed to the internet?";
  AppendTBRQAInAddlOption(requirementID, question);
    //NETSEC-002
  requirementID = "NETSEC-002";
  question =
    "# Is SSL/TLS being utilized?";
  AppendTBRQAInAddlOption(requirementID, question);

   //NETSEC-003
  requirementID = "NETSEC-003";
  question =
    "# All data stores will need to be in private subnets as defined in NETSEC-003. Is it possible for this to be re-implemented for this case study? Otherwise another case study will need to be provided to meet that requirements as it is a firm one.";
  AppendTBRQAInAddlOption(requirementID, question);
    //NETSEC-003
  requirementID = "NETSEC-003";
  question =
    "# Can you provide an architecture diagram of where data stores are sitting? DOC-001 doesn't provide information where services are sitting in regards to networking (which services are in public subnets? Which services are in private subnets?)Alternatively, can you provide a list of all data stores in the architecture and the routes associated with the subnet(s) where each data store resides.";
  AppendTBRQAInAddlOption(requirementID, question);

    //OPE-001
  requirementID = "OPE-001";
  question =
    "# What metrics are you using to assess the health of the service in question? Was the customer provided information on how to understand the metrics collected?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "OPE-002";
  question =
    "# Where do these metrics live? Is a partner or AWS solution being used to monitor these metrics?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "OPE-003";
  question =
    "#  What troubleshooting and operational tasks have been covered during handover? A high level overview would be perfect.";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "OPE-003";
  question =
    "# What kind of enablement to the customer was given to allow them to run their account and workload (if the customer is managing their own account)?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "OPE-003";
  question =
    "# Is the Globant team continuing to manage this solution on behalf of the customer? If not, was there a handover process or training given to the customer to be able to manage the infrastructure and workload on their own?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "OPE-004";
  question =
    "# What kind of testing is conducting before deploying to prod?";
  AppendTBRQAInAddlOption(requirementID, question);

    requirementID = "OPE-005";
  question =
    "# Where are the Cloudformation templates stored? These will need to be stored in some form of version control system (Git, SVN, etc. ) so changes are tracked in the case of deletion.";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "OPE-005";
  question =
    "# Is there any form of version control being used? Any deployment scripts, infrastructure templates, etc needs to be managed by some form of version control system managed by the customer or you [the partner]?";
  AppendTBRQAInAddlOption(requirementID, question);

   requirementID = "OPE-006";
  question =
    "# The application telemetry collected should support troubleshooting. Its not really clear what telemetry being collected is relevant to troubleshooting, or at least used for error collection/identification. In both solutions the telemetry mentioned in the checklist appear mostly usage/load based, and potentially of little value to troubleshooting. If the partner could please be more specific on this it future this would help. For example, are ALB application logs being collected? Are Web application logs being collected, etc etc.";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "OPE-006";
  question =
    "# Which services are important for emitting telemetry to understand the workload's state?";
  AppendTBRQAInAddlOption(requirementID, question);

    //REL-001
  requirementID = "REL-001";
  question = "# Can you describe the process for deploying changes to the workload?";
  AppendTBRQAInAddlOption(requirementID, question);

  //REL-002
  requirementID = "REL-002";
  question = "# Can you provide the RTO and RPO that was agreed upon with the customer? Can you provide a summary for the recovery process?";
  AppendTBRQAInAddlOption(requirementID, question);

  //REL-003
  requirementID = "REL-003";
  question = "# How is changes in demand being planned for? What mechanisms are in place (Ex. Auto-Scaling enabled) to ensure the workload can adapt to changes? ";
  AppendTBRQAInAddlOption(requirementID, question);

  //S3-001
  requirementID = "S3-001";
  question = "# Are there any S3 buckets with public access?";
  AppendTBRQAInAddlOption(requirementID, question);

  requirementID = "S3-001";
  question = "# What is the process to make an S3 bucket public?";
  AppendTBRQAInAddlOption(requirementID, question);

  //S3-002
  requirementID = "S3-002";
  question = "# What featuires of S3 are you using to enforce that the buckets are private? e.g. S3 Block Public Access / Bucket Policies / S3 VPC Endpoint";
  AppendTBRQAInAddlOption(requirementID, question);

  //S3-003
  requirementID = "S3-003";
  question =
    "# How are you monitoring and getting alerted if a bucket becomes public?";
  AppendTBRQAInAddlOption(requirementID, question);
    //SDAT-001
  requirementID = "SDAT-001";
  question = "# Does the solution store PII?";
  AppendTBRQAInAddlOption(requirementID, question);

  //SDAT-001
  requirementID = "SDAT-001";
  question = "# Does the solution store PHI?";
  AppendTBRQAInAddlOption(requirementID, question);

    //SECOPS-001
  requirementID = "SECOPS-001";
  question = "# What components are taking advantage of KMS? How are these keys managed?";
  AppendTBRQAInAddlOption(requirementID, question);

    //SUP-001
  requirementID = "SUP-001";
  question =
    "# What AWS account structure do you have? (single account/multi account / AWS Organization etc)? If there is no Business support or plus on your production accounts, what mechanism you have to gain support from AWS if required?";
  AppendTBRQAInAddlOption(requirementID, question);


}

function AppendTBRQAInAddlOption(requirement, question) {

  console.log("Added item : " + requirement);

  var initialVal = document.getElementById(requirement);
  if (initialVal == null){
    return;
  }

  initialVal = initialVal.childNodes[2]
    .childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0]
    .childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[2]
    .childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0]
    .value;

  if (initialVal.trim() == "") initialVal += "Q: " + question + "\n" + "A:";
  else initialVal += "\nQ: " + question + "\n" + "A:";
  document.getElementById(
    requirement
  ).childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].value = initialVal;
}



///////////////////////////////////////////////////////////////////////////////////////////



function ExportAddlQuestions() {
  console.log("export");
  var requirements = [
 // BaselineType: CustomerDeployed",
// ReleaseDate: "2021-04-26"",
// Version:  "2021_q2_v1"",
// Category:  Introduction",
"INT-001",
"INT-002",
"INT-003",
"INT-004",
// Category:  PrerequisitesandRequirements",
"PRQ-001",
"PRQ-002",
"PRQ-003",
// Category:  ArchitectureDiagrams",
"ARCH-001",
"ARCH-002",
"ARCH-003",
"ARCH-004",
"ARCH-005",
"ARCH-006",
// Category:  Security",
"DSEC-001",
"DSEC-002",
"DSEC-003",
"DSEC-004",
"DSEC-005",
"DSEC-006",
"DSEC-007",
"DSEC-008",
"DSEC-009",
"DSEC-010",
// Category:  Costs",
"CST-001",
"CST-002",
// Category:  Sizing",
"SIZ-001",
"SIZ-002",
"SIZ-003",
"SIZ-004",
// Category:  DeploymentAssets",
"DAS-001",
"DAS-002",
"DAS-003",
"DAS-004",
// Category:  HealthCheck",
"HLCH-001",
// Category:  BackupandRecovery",
"BAR-001",
"BAR-002",
"BAR-003",
"BAR-004",
"BAR-005",
"BAR-006",
// Category:  RoutineMaintenance",
"RM-001",
"RM-002",
"RM-003",
"RM-004",
// Category:  EmergencyMaintenance",
"EMER-001",
"EMER-002",
// Category:  Support",
"SUP-001",
"SUP-002",
"SUP-003",
// ValidationType: Baseline",
// Category: "{{SegmentType}}"",
// ValidationType: Competency",
// PartnerType: Consulting",
// Segment: DataandAnalytics",
// ReleaseDate: "2021-03-15"",
// Version:  "5.1"",
// Category:  DesigningforOperations",
"PRDO-001",
"PRDO-002",
"PRDO-003",
"PRDO-004",
"PRDO-005",
"PRDO-006",
"PRDO-007",
"PRDO-008",
// Category:  OperationalReadiness",
"PROR-001",
"PROR-002",
"PROR-003",
// Category:  UnderstandingOperationalHealth",
"PROH-001",
// Category:  RespondingtoEvents",
"PRRE-001",
"PRRE-002",
// Category:  LearningfromExperience",
"PRLL-001",
// Category:  InfrastructureandDataProtection",
"PRID-001",
"PRID-002",
"PRID-003",
"PRID-004",
// Category:  Network",
"PRNET-001",
"PRNET-002",
"PRNET-003",
// Category:  ApplicationDesignforHighAvailability",
"PRHA-001",
"PRHA-002",
// Category:  Testing",
"PRTST-001",
// Category:  FailureManagement",
"PRFM-001",
// Category:  ResourcePlanning",
"PRRP-001",
"PRRP-002",
"PRRP-003",
"PRRP-004",
"PRRP-005",
// Category:  SpendVisibilityandTracking",
"PRSVT-001",
// Category:  CostOptimizationoverTime",
"PRCOT-001",
// Category:  CustomerExamplesCriteria",
"EXCRI-001",
// Category:  UserSecurityBestPractices",
"EXSBP-001",
// Category:  MonitoringandDetection",
"EXMON-001",
// Category:  PerformanceEfficiency",
"EXPE-001",
"EXPE-002",
"EXPE-003",
"EXPE-004",
// Category:  PerformanceMonitoringandReview",
"EXPMR-001",
"EXPMR-002",
// Category:  PerformanceTradeoffs",
"EXPT-001",
// ValidationType: AWSDigitalCustomerExperienceCompetency",
// Segment: DigitalCustomerExperience",
// Version:  "2.1"",
// Category:  AWSPartnerDeliveryModel",
"PRPDM-001",
"PRPDM-002",
"PRIDP-001",
"PRIDP-002",
"PRIDP-003",
"PRIDP-004",
"EXIDP-001",
"EXIDP-002",
"EXIDP-003",
"EXIDP-004",
"EXIDP-005",
"EXIDP-006",
// Category:  CostOptimization",
"EXCOP-001",
"EXCOP-002",
"EXCOP-003",
"EXCOP-004",
// Category: "{{Segment}}"",
// Category:  "{{Segment}}PracticeOverview"",
"POV-001",
"POV-002",
"POV-003",
"POV-004",
"POV-005",
"PRJ-001",
"PRJ-002",
"PRJ-003",
"PRJ-004",
"PRJ-005",
// Category:  CustomerSatisfaction",
"CSN-001",
"CSN-002",
// Segment: DevOps",
// ReleaseDate: "2020-08-10"",
// Version:  "2.0"",
// Category:  OrganizationalChange",
"PROC-001",
"PROC-002",
// Category:  InfrastructureasCode",
"PRIAC-001",
"PRIAC-002",
"PRIAC-003",
// Category:  ContinuousIntegration/ContinuousDeliveryCI/CD",
"PRCICD-001",
"PRCICD-002",
// Category:  VersionControl",
"PRVCL-001",
// Category:  Microservices",
"PRMSC-001",
// Category:  MonitoringandLogging",
"PRMLO-001",
"PRMLO-002",
"PRMLO-003",
// Category:  PlatformasaService",
"PRPAS-001",
"PRSEC-001",
// Category:  CustomerExampleCriteria",
// Segment: DigitalWorkplace",
// Category:  DigitalWorkplaceDeliveryModel",
"PRDMO-001",
"PRDMO-002",
// Category:  SecurityBestPractices",
"PRSEC-002",
// Category:  Customerexamples",
"EXMUC-001",
// Category:  Reliability",
"EXREL-001",
"EXREL-002",
"EXREL-003",
"EXCO-001",
// Segment: Education",
"PRSEC-003",
"PRSEC-004",
"PRSEC-005",
"PRSEC-006",
"PRSEC-007",
"PRREL-001",
"PRREL-002",
"PRREL-003",
"PRREL-004",
// Category:  SolutionDesignCapabilities",
"EXSDC-001",
"EXPE-005",
// Category:  OperationalExcellence",
"EXOPE-001",
"EXOPE-002",
"EXOPE-003",
"EXOPE-004",
// Segment: Energy",
// ReleaseDate: "2021-06-10"",
// Version:  "1.0"",
// Segment: Example",
// ReleaseDate: "2020-06-15"",
// Category:  ExampleRequirementCategory",
"EXMP-001",
// Category:  CustomerUseCases",
// Category:  ExampleBestPractices",
"EXMBP-001",
// Segment: FinancialServices",
// Category:  FinancialServicesPracticeandFocus",
"PRFS-001",
// Category:  FinancialServicesSecurityRequirements",
"EXCSC-001",
"EXCSC-002",
"EXCSC-003",
"EXSEC-001",
"EXSEC-002",
// Category:  FinancialServicesReliabilityRequirements",
"EXREL-004",
// Category:  FinancialServicesOperationalExcellenceRequirements",
// Category:  FinancialServicesCostOptimizationRequirements",
// Segment: Government",
// Category:  SolutionDesign",
"EXSC-001",
// Category:  Compliance",
"EXCOMP-001",
"EXCOMP-002",
// Category:  IndustryDesignations",
"EXID-001",
"EXID-002",
"EXID-003",
"EXID-004",
"EXID-005",
"EXID-006",
// Segment: Healthcare",
// Category:  HealthcarePracticeOverview",
"PRMP-001",
"PRMP-002",
"EXSBP-002",
"EXSBP-003",
"EXSBP-004",
"EXSBP-005",
// Category:  Performance",
"EXPEF-001",
// Category:  HealthcareCompliance",
"EXHCC-001",
"EXHCC-002",
"EXHCC-003",
// Segment: IndustrialSoftware",
"EXCOE-001",
// Segment: IoT",
"PROPE-001",
"PROPE-002",
"PROPE-003",
"PROPE-004",
"PROPE-005",
"PROPE-006",
"PROPE-007",
"PROPE-008",
"PRREL-005",
"PRREL-006",
"PRREL-007",
"EXCRI-002",
"EXCRI-003",
"EXOPE-005",
"EXOPE-006",
"EXOPE-007",
"EXSEC-003",
"EXSEC-004",
"EXSEC-005",
"EXSEC-006",
"EXSEC-007",
"EXSEC-008",
// Category:  PerformanceEfficiency(UseCase1)",
"EXPE-006",
"EXPE-007",
"EXPE-008",
"EXPE-009",
"EXPE-010",
"EXCOP-005",
"EXCOP-006",
"EXCOP-007",
// Segment: LifeSciences",
// Category:  LifeSciencesPracticeOverview",
"PROV-001",
"PROV-002",
// Category:  LifeSciencesCompliance",
"EXLSC-001",
"EXLSC-002",
"EXLSC-003",
"EXLSC-004",
// Segment: MachineLearning",
"PROPE-009",
"PROPE-010",
"PROPE-011",
"PROPE-012",
"PROPE-013",
"PRCOP-001",
"PRCOP-002",
"PRCOP-003",
"PRCOP-004",
"PRCOP-005",
"PRCOP-006",
"PRCOP-007",
// Category:  Requirementsapplicabletoallcustomerexamples",
"EXCE-001",
"EXCE-002",
// Category:  DesignforOperationsrequirementsapplicabletoallcustomerexamples",
"EXDSGN-001",
"EXDSGN-002",
"EXDSGN-003",
"EXDSGN-004",
"EXDSGN-005",
"EXDSGN-006",
"EXDSGN-007",
"EXDSGN-008",
// Category:  PerformanceEfficiencyrequirementsapplicabletotwospecificcustomerreferences",
"EXPERF-001",
"EXPERF-002",
"EXPERF-003",
"EXPERF-004",
"EXPERF-005",
"EXPERF-006",
"EXPERF-007",
// Segment: MainframeModernization",
// ReleaseDate: "2021-01-07"",
// Version:  "1.1"",
// Category:  MainframeModernizations",
"MMPR-001",
"MMPR-002",
"MMPR-003",
"MMPR-004",
"MMPR-005",
// Category:  ModernizationCharacteristics",
"MMC-001",
"MMC-002",
"MMC-003",
"MMC-004",
"MMC-005",
"MMC-006",
// Category:  Documentation",
"MMCE-001",
"MMCE-002",
"MMCE-003",
"MMCE-004",
"MMCE-005",
"MMCE-006",
"MMCE-007",
// Segment: Level1ManagedSecurityServiceProvider",
// ReleaseDate: "2021-06-16"",
"AWSLevel1ManagedSecurityServiceProvider(MSSP)CompetencyPartnershavedemonstratedtheirtechnicalproficiencyandoperationsmeettherequirementsforthebaselinestandardofqualityformanagedcloudsecurity:Level1ManagedSecurityServices(MSS).TheLevel1MSSbaselinecoversmanagedsecurityservicesthatprotect,monitor,andrespondtosecurityeventsofessentialAWSresourcesandaredeliveredtocustomersasafullymanagedservice.Level1MSSbenefitthesecuritypostureforAWSenvironmentsofanysizeandaddressthecustomersecurityusecasesinthefollowingsection.PartnersmustmeetallprerequisitesandtechnicalrequirementsinthischecklistandwillbeassignedtotheCompetencycategory:Level1MSSP.PartnersarerequiredtorepeatthisvalidationprocessannuallytomaintaintheirmembershipintheCompetencyeachyear.PartnersthatfailtosuccessfullymeetallperquisitesandtechnicalrequirementsofthischecklistannuallywillberemovedfromtheCompetencyandneedtoremovetheLevel1MSSPCompetencybadgeandmentionoftheirmembershipintheCompetencyonallmarketingandsalesmaterialsincludingbutnotlimitedtowebsites,presentations,videos,whitepapers,blogs,socialmediaposts.Partnersmayre-applyoncepreparedtore-engagetheCompetencyvalidationprocessatanytime.",
// Category:  "GeneralRequirements"",
"GEN-001",
"GEN-002",
"GEN-003",
"GEN-004",
// Category:  AWSInfrastructureVulnerabilityScanning",
"VULN-001",
"VULN-002",
"VULN-003",
// Category:  AWSResourceInventoryVisibility",
"INV-001",
"INV-002",
// Category:  AWSSecurityBestPracticesMonitoring",
"BES-001",
// Category:  AWSComplianceMonitoring",
"COM-001",
// Category:  Monitor,TriageSecurityEvents",
"EVT-001",
"EVT-002",
"EVT-003",
"EVT-004",
// Category:  DistributedDenialofService(DDoS)Mitigation",
"DDOS-001",
// Category:  ManagedIntrusionPreventionSystem(IPS)",
"IDP-001",
"IDP-002",
"IDP-003",
"IDP-004",
"IDP-005",
"IDP-006",
"IDP-007",
// Category:  ManagedDetectionandResponseforAWSEndpoints",
"MEDR-001",
"MEDR-002",
"MEDR-003",
"MEDR-004",
"MEDR-005",
// Category:  ManagedWebApplicationFirewall(WAF)",
"WAF-001",
"WAF-002",
"WAF-003",
// Segment: MicrosoftWorkloads",
// Category:  CustomerExamplesAdditionalDetails",
"MSWS-001",
"MSWS-002",
// Category:  AWSServicesUsed",
"EXSRV-001",
"EXPEY-001",
"EXPEY-002",
// Segment: Migration",
// ReleaseDate: "2021-08-02"",
// Version:  "2.5"",
"MOPE-001",
"MOPE-002",
"MSEC-001",
"MSEC-002",
"MSEC-003",
"MSEC-004",
"MSEC-005",
"MREL-001",
"MREL-002",
"MREL-003",
"MPER-001",
"MCOP-001",
"MCOP-002",
// Category:  MigrationMethodology-AssessPhase",
"CRA-001",
// Category:  MigrationMethodology-MobilizePhase",
"MOB-001",
"MOB-002",
"MOB-003",
"MOB-004",
"MOB-005",
"MOB-006",
"MOB-007",
"MOB-008",
// Segment: Mobile",
// Category:  AWSServiceExpertise",
"EXEXP-001",
"PRSDC-001",
// Category:  InfrastructureBuild",
"PRINFB-001",
"PRINFB-002",
"PRINFB-003",
"PRINFB-004",
// Segment: Networking",
// ReleaseDate: "2021-06-07"",
// Category:  InstitutionalKnowledge",
"NETP-001",
"NETP-002",
// Category:  TechnicalDesign",
"NETE-001",
"NETE-002",
"NETE-003",
"NETE-004",
"NETE-005",
"NETE-006",
"NETE-007",
// Segment: Nonprofit",
// Category:  SolutionBuildCapability",
"EXCOM-001",
"EXCOM-002",
// Segment: Oracle",
// Category:  OracleServiceExpertise",
"EXOSE-001",
// Category:  BaselineTechnicalConsiderations",
"EXPEF-002",
// Segment: PublicSafetyandDisasterResponse",
// Category:  PublicSafetyandDisasterResponsePracticeOverview",
"PSOV-004",
"EXBLT-001",
"EXBLT-002",
"EXBLT-003",
"EXBLT-004",
"EXBLT-005",
"EXBLT-006",
"EXBLT-007",
"EXBLT-008",
// Category:  PublicSafety&DisasterResponseOperationsSolutions",
"EXPSDR-001",
"EXPSDR-002",
"EXPSDR-003",
// Category:  Disaster&PublicSafetyData&AnalyticsSolutions",
"EXPANA-001",
"EXPANA-002",
"EXPANA-003",
"EXPANA-004",
// Category:  InfrastructureRecoverySolutions",
"EXIRS-001",
"EXIRS-002",
// Segment: Retail",
"EXDET-001",
"EXDET-002",
"EXDET-003",
"EXDET-004",
"EXDET-005",
"EXDET-006",
"EXDET-007",
// Segment: SaaS",
// Category:  SaaSExpertise",
"SAASPR-001",
"SAASPR-002",
// Category:  ConsistentMethodologyandProcess",
"SAASCSM-001",
"SAASCSM-002",
// Category:  CustomerExampleEvidence",
"SAASCSR-001",
"SAASCSR-002",
"SAASCSR-003",
// Category:  TechnicalApproach",
"SAASTA-001",
"SAASTA-002",
"SAASTA-003",
"SAASTA-004",
"SAASTA-005",
"SAASTA-006",
"SAASTA-007",
"SAASTA-008",
"SAASTA-009",
"SAASTA-010",
"SAASTA-011",
"SAASTA-012",
"SAASTA-013",
"SAASTA-014",
"SAASTA-015",
"SAASTA-016",
"SAASTA-017",
"SAASTA-018",
// Segment: SAP",
"EXMUC-002",
// Segment: Security",
// ReleaseDate: "2020-12-11"",
// Version:  "2.2"",
// Category:  SecurityEngineering",
"EXSEE-001",
"EXSEE-002",
"EXSEE-003",
"EXSEE-004",
// Category:  SecurityOperationsandAutomation",
"PRSOA-001",
"PRSOA-002",
"PRSOA-003",
// Category:  Governance,Risk,andCompliance",
"PRGRC-001",
"PRGRC-002",
// Category:  ApplicationSecurity",
"PRASEC-001",
"PRASEC-002",
"PRASEC-003",
// Category:  StandardSolutionDeliveryPatternsandISVTooling",
// Segment: Storage",
// Category:  StoragePracticeOverview",
"PRSOV-001",
"PRSOV-002",
"PRSOV-003",
"PRSOV-004",
"PRSOV-005",
"PRSOV-006",
"PRSOV-007",
"PRSOV-008",
"EXBA-001",
"EXBA-002",
"EXBA-003",
// Category:  LessonsLearned",
"EXLL-001",
// Category:  BackupandRestore",
"EXBKP-001",
"EXBKP-002",
"EXBKP-003",
"EXBKP-004",
// Category:  BackupBasedonCloud-NativeInfrastructure",
"EXBCN-001",
"EXBCN-002",
"EXBCN-003",
"EXBCN-004",
"EXBCN-005",
"EXBCN-006",
// Category:  Archive",
"EXAR-001",
// Category:  BusinessContinuity/DisasterRecovery(BCDR)solutionsthatfunctionwithminimalplanmodification.",
"EXDR-001",
"EXDR-002",
// Category:  PrimaryStorage(usingfileorblockprotocolsandObjectStorage)",
"EXPS-001",
"EXPS-002",
"EXPS-003",
"EXPS-004",
"EXPS-005",
"EXPS-006",
"EXPS-007",
"EXPS-008",
"EXPS-009",
"EXPS-010",
// Category:  DataTransfer",
"EXDT-001",
"EXDT-002",
"EXSV-001",
// Segment: SupplyChain",
// ReleaseDate: "2022-02-28"",
// Version:  "0.1"",
// Segment: Sustainability",
// ReleaseDate: "2021-02-11"",
// Category:  SustainabilityRequirementCategory",
"SUSRC-001",
"SUSUC-001",
"SUSUC-002",
// Segment: TravelandHospitality",
// ReleaseDate: "2020-06-10"",
// Category:  RepeatableDelivery",
"THP-001",
// Category:  TravelandHospitalitySolutions",
"THCE-001",
// PartnerType: Technology",
// Segment: CloudManagementTools",
// Version:  "3.2"",
// Category:  CloudManagementToolsSolutionFeatures",
"CMT-001",
"CMT-002",
"CMT-003",
"CMT-004",
"CMT-005",
"CMT-006",
// Category:  CloudGovernance",
"CMTCG-001",
"CMTCG-002",
"CMTCG-003",
"CMTCG-004",
"CMTCG-005",
"CMTCG-006",
"CMTCG-007",
"CMTCG-008",
// Category:  CostandResourceOptimization",
"CMTCRO-001",
// Category:  Costvisibility,Reporting,andAllocations",
"CMTCV-001",
"CMTCV-002",
"CMTCV-003",
"CMTCV-004",
"CMTCV-005",
"CMTCV-006",
"CMTCV-007",
"CMTCV-008",
"CMTCV-009",
"CMTCV-010",
// Category:  RightSizing,Elasticity,andDecommissioningUnderutilizedResources",
"CMTRS-001",
"CMTRS-002",
"CMTRS-003",
"CMTRS-004",
"CMTRS-005",
"CMTRS-006",
"CMTRS-007",
"CMTRS-008",
"CMTRS-009",
"CMTRS-010",
// Category:  ReservedInstance(RI)Management",
"CMTRI-001",
"CMTRI-002",
"CMTRI-003",
"CMTRI-004",
"CMTRI-005",
"CMTRI-006",
"CMTRI-007",
"CMTRI-008",
// Category:  SpotInstanceManagement",
"CMTSPT-001",
"CMTSPT-002",
"CMTSPT-003",
"CMTSPT-004",
"CMTSPT-005",
"CMTSPT-006",
// Segment: Container",
// ReleaseDate: "2022-02-15"",
// Version:  "2.3"",
// Category:  ContainerSolutionFeatures",
"CON-001",
"CON-002",
"CON-003",
"CON-004",
"CON-005",
"CON-006",
// Category:  Foundation",
"CONFND-001",
"CONFND-002",
"CONFND-003",
"CONFND-004",
// Category:  MonitoringandLoggingRequirements",
"CONML-001",
"CONML-002",
"CONML-003",
"CONML-004",
// Category:  EnterpriseContainerManagementSolutions",
"CES-001",
"CES-002",
"CES-003",
"CES-004",
"CES-005",
"CES-006",
"CES-007",
"CES-008",
// Category:  Security-CVEScanningandRemediation",
"CONSS-001",
"CONSS-002",
"CONSS-003",
"CONSS-004",
// Category:  Security-NetworkSecurity",
"CONNET-001",
"CONNET-002",
"CONNET-003",
// Category:  Security-EventMonitoring",
"CONEM-001",
"CONEM-002",
"CONEM-003",
"CONEM-004",
// Version:  "4.2"",
// Category:  DataAndAnalyticsSolutionFeatures",
"DA-001",
"DA-002",
"DA-003",
"DA-004",
"DA-005",
// Category:  DataAnalyticsPlatformSolutionFeatures",
"DAP-001",
// Category:  NoSQL/NewSQLSolutionFeatures",
"NOSQL-001",
"NOSQL-002",
// Category:  DataIntegration&PreparationSolutionFeatures",
"DINT-001",
// Category:  BusinessIntelligence&DataVisualizationSolutionFeatures",
"BI-001",
// Category:  DataGovernance&SecuritySolutionFeatures",
"DGS-001",
// Category:  Supportlevel",
"DOC-001",
"DOC-002",
"DOC-003",
// Category:  Security-Networking",
"NETSEC-001",
"NETSEC-002",
"NETSEC-003",
// Category:  Security-OperatingSystemandApplication",
"OSSEC-001",
"OSSEC-002",
"OSSEC-003",
// Category:  Security-ITOperations",
"SECOPS-001",
"SECOPS-004",
"SECOPS-005",
"SECOPS-006",
"SECOPS-007",
"SECOPS-008",
"SECOPS-009",
"SECOPS-011",
// Category:  TenantIsolation",
"TI-001",
"TI-002",
"TI-003",
// Category:  AWSAPIIntegration",
"AWSAPI-001",
"AWSAPI-002",
"AWSAPI-003",
"AWSAPI-004",
"REL-001",
"REL-002",
"REL-003",
"REL-004",
"REL-005",
"PRF-001",
"PRF-002",
"OPE-001",
"OPE-002",
"OPE-003",
"OPE-004",
"OPE-005",
"OPE-006",
"OPS-006", //Typo in crucible but to make it export I added it here. OPS-006 should be OPE-006 in Crucible
// Category:  DevOpsSolutionFeatures",
"DEVOPS-001",
// Category:  DigitalCustomerExperienceSolutionFeatures",
"DCX-001",
// Category:  ContentManagementSolutionFeatures",
"DCXCM-001",
"DCXCM-002",
"DCXCM-003",
// Category:  MarketingAutomationSolutionFeatures",
"DCXMA-001",
"DCXMA-002",
"DCXMA-003",
// Category:  DigitalCommerceSolutionFeatures",
"DCXDC-001",
"DCXDC-002",
"DCXDC-003",
"DCXDC-004",
"DCXDC-005",
"DCXDC-006",
// Category:  Customer360SolutionFeatures",
"DCXCUST-001",
"DCXCUST-002",
"DCXCUST-003",
"DCXCUST-004",
// Category:  MobileandWebApplicationSolutionFeatures",
"DCXMOB-001",
// Segment: DigitalMedia",
// Category:  DigitalMediaSolutionFeatures",
"DM-001",
// Version:  "1.2"",
// Category:  DigitalWorkplaceSolutionFeatures",
"DWP-001",
// Category:  CollaborationPlatforms",
"COLAB-001",
"COLAB-002",
// Category:  EducationSolutionFeatures",
"EDU-001",
// Category:  CategoryFit",
"ETC-001",
// Version:  "3.3"",
// Category:  FinancialServicesSolutionFeatures",
"FS-001",
"FS-002",
"FSSEC-001",
"FSSEC-002",
"FSSEC-003",
"FSSEC-004",
"FSSEC-005",
"FSSEC-006",
"FSSEC-007",
"FSSEC-008",
"FSSEC-009",
"FSSEC-010",
"FSOPE-001",
"FSOPE-002",
"FSOPE-003",
"FSOPE-004",
"FSOPE-005",
"FSREL-001",
// Category:  HealthcareSolutionFeatures",
"HC-001",
"HC-002",
// Segment: HighPerformanceComputing",
// Category:  Applications",
"APP-001",
"APP-002",
"APP-003",
"APP-004",
"APP-005",
"APP-006",
"APP-007",
"APP-008",
"APP-009",
"APP-010",
"APP-011",
"APP-012",
// Category:  HPCManagement",
"HPCM-001",
"HPCM-002",
"HPCM-003",
"HPCM-004",
"HPCM-005",
"HPCM-006",
"HPCM-007",
"HPCM-008",
"HPCM-009",
"HPCM-010",
"HPCM-011",
"HPCM-012",
// Category:  FoundationalTechnology",
"FTEC-001",
"FTEC-002",
"FTEC-003",
"FTEC-004",
"FTEC-005",
// Category:  IndustrialSoftwareSolutionFeatures",
"IDS-001",
"IDS-002",
// Category:  IoTGeneralSolutionFeatures",
"IOT-001",
"IOT-002",
// Category:  IoTHardwareRequirements",
"IOTHW-001",
"IOTHW-002",
"IOTHW-003",
"IOTHW-004",
"IOTHW-005",
"IOTHW-006",
"IOTHW-007",
// Category:  IoTSoftwareRequirements",
"IOTSW-001",
"IOTSW-002",
// Category:  TechnologyforEdgeRequirements",
"IOTEDG-001",
"IOTEDG-002",
"IOTEDG-003",
"IOTEDG-004",
// Category:  TechnologyforGatewayRequirements",
"IOTGW-001",
"IOTGW-002",
"IOTGW-003",
"IOTGW-004",
"IOTGW-005",
// Category:  TechnologyforPlatformProvidersRequirements",
"IOTPP-001",
"IOTPP-002",
// Category:  TechnologyforConnectivityRequirements",
"IOTCON-001",
"IOTCON-002",
"IOTCON-003",
// Category:  LifeSciencesSolutionFeatures",
"LS-001",
"LS-002",
// Category:  GeneralMachineLearningRequirements",
"ML-001",
"ML-002",
// Category:  DataServicesFeatures",
"MLDS-001",
"MLDS-002",
// Category:  PlatformProviderFeatures",
"MLPP-001",
"MLPP-002",
// Category:  SaaS/APIProviderFeatures",
"MLAPI-001",
"MGMF-001",
"MGMF-002",
"MGMF-003",
"MGMF-004",
"MGMF-005",
"MGMF-006",
"MGMF-007",
"MGMF-008",
"MGMF-009",
"MGMF-010",
// Category:  MicrosoftWorkloadsSolutionFeatures",
"MSW-001",
// Category:  MicrosoftWorkloadsMigrationSolutionFeatures",
"MSWM-001",
"MSWM-002",
"MSWM-003",
"MSWM-004",
// Category:  MicrosoftWorkloadsOperationalOptimizationSolutionFeatures",
"MSWOO-001",
"MSWOO-002",
// Category:  MicrosoftWorkloadsData,Analytics,andMachineLearningSolutionFeatures",
"MSWDA-001",
"MSWDA-002",
"MSWDA-003",
"MSWDA-004",
// ReleaseDate: "2021-11-29"",
// Category:  Discovery,Planning,andRecommendationCore",
"MDPR-001",
"MDPR-002",
"MDPR-003",
"MDPR-004",
"MDPR-005",
"MDPR-006",
"MDPR-007",
"MDPR-008",
"MDPR-009",
"MDPR-010",
"MDPR-011",
// Category:  InfrastructureDiscovery,Planning,andRecommendation",
"MDPR-012",
"MDPR-013",
"MDPR-014",
"MDPR-015",
"MDPR-016",
// Category:  ApplicationDiscovery,Planning,andRecommendation",
"MDPR-017",
"MDPR-018",
"MDPR-019",
"MDPR-020",
"MDPR-021",
"MDPR-022",
// Category:  BusinessCaseAnalysisCore",
"MGTR-001",
"MGTR-002",
"MGTR-003",
"MGTR-004",
"MGTR-005",
"MGTR-006",
"MGTR-007",
"MGTR-008",
"MGTR-009",
"MGTR-010",
"MGTR-011",
"MGTR-012",
"MGTR-013",
"MGTR-014",
"MGTR-015",
// Category:  ComputeandStorageAnalysis",
"MGTR-016",
"MGTR-017",
"MGTR-018",
"MGTR-019",
"MGTR-020",
"MGTR-021",
// Category:  ModernizationAnalysis",
"MGTR-022",
"MGTR-023",
"MGTR-024",
"MGTR-025",
"MGTR-026",
"MGTR-027",
"MGTR-028",
"MGTR-029",
// Category:  ApplicationMobilityCore",
"MDAM-001",
"MDAM-002",
"MDAM-003",
"MDAM-004",
"MDAM-005",
"MDAM-006",
"MDAM-007",
"MDAM-008",
"MDAM-009",
"MDAM-010",
"MDAM-011",
"MDAM-012",
"MDAM-013",
"MDAM-014",
"MDAM-015",
// Category:  ApplicationDataManagement",
"MDAM-016",
"MDAM-017",
// Category:  CodeMigration",
"MDAM-018",
"MDAM-019",
"MDAM-020",
"MDAM-021",
"MDAM-022",
"MDAM-023",
"MDAM-024",
"MDAM-025",
"MDAM-026",
// Category:  DataMobilityCore",
"DMCR-001",
"DMCR-002",
"DMCR-003",
"DMCR-004",
"DMCR-005",
"DMCR-006",
"DMCR-007",
"DMCR-008",
"DMCR-009",
"DMCR-010",
"DMCR-011",
"DMCR-012",
"DMCR-013",
"DMCR-014",
// Category:  GeneralStorageMigration",
"DMCR-015",
"DMCR-016",
"DMCR-017",
"DMCR-018",
"DMCR-019",
// Category:  CloudDatabaseMigration",
"DMCR-020",
"DMCR-021",
// Category:  ApplicationMonitoringandOrchestration",
"MAMO-001",
"MAMO-002",
"MAMO-003",
"MAMO-004",
"MAMO-005",
"MAMO-006",
"MAMO-007",
"MAMO-008",
"MAMO-009",
"MAMO-010",
"MAMO-011",
"MAMO-012",
"MAMO-013",
"MAMO-014",
"MAMO-015",
// Category:  MobileSolutionFeatures",
// ReleaseDate: "2022-03-05"",
// Category:  NetworkingSolutionFeatures",
"NET-001",
// Category:  NetworkConnectivitySolutionRequirements",
"NETCON-001",
"NETCON-002",
"NETCON-003",
"NETCON-005",
"NETCON-006",
"NETCON-007",
// Category:  DirectConnectforIntegratedPartnersSolutionRequirements",
"NETDCN-001",
"NETDCN-002",
"NETDCN-003",
"NETDCN-004",
"NETDCN-005",
"NETDCN-006",
// Category:  DirectConnectforInfrastructurePartnersSolutionRequirements",
"NETDCF-001",
"NETDCF-002",
// Category:  LoadBalancerSolutionRequirements",
"NETLB-001",
"NETLB-002",
"NETLB-003",
"NETLB-004",
"NETLB-005",
"NETLB-006",
"NETLB-007",
// Category:  NetworkManagementSolutionRequirements",
"NETMGT-001",
"NETMGT-002",
"NETMGT-003",
"NETMGT-004",
"NETMGT-005",
// Category:  NonprofitSolutionFeatures",
"NP-001",
// Category:  PublicSafety&DisasterResponseSolutionFeatures",
"PSDR-001",
"PSDR-002",
// Category:  RetailSolutionFeatures",
"RTL-001",
"RTL-002",
"RTL-003",
"RTL-004",
// Category:  GeneralSecuritySolutionRequirements",
"SEC-001",
"SEC-002",
"SEC-003",
"SEC-004",
"SEC-005",
"SEC-006",
"SEC-007",
// Category:  NetworkandInfrastructureSecuritySolutionFeatures",
"SECINF-001",
"SECINF-002",
"SECINF-003",
"SECINF-004",
"SECINF-005",
"SECINF-006",
// Category:  HostandEndpointSecuritySolutionFeatures",
"SECHEP-001",
"SECHEP-002",
"SECHEP-003",
"SECHEP-004",
"SECHEP-005",
"SECHEP-006",
"SECHEP-007",
"SECHEP-008",
// Category:  DataProtectionandEncryptionSolutionFeatures",
"SECCRP-001",
"SECCRP-002",
"SECCRP-003",
"SECCRP-004",
"SECCRP-005",
"SECCRP-006",
// Category:  Governance,Risk,andComplianceSolutionFeatures",
"SECGRC-001",
"SECGRC-002",
"SECGRC-003",
"SECGRC-004",
"SECGRC-005",
"SECGRC-006",
"SECGRC-007",
// Category:  Logging,Monitoring,ThreatDetection,andAnalyticsSolutionFeatures",
"SECLOG-001",
"SECLOG-002",
"SECLOG-003",
"SECLOG-004",
// Category:  IdentityandAccessControlSolutionFeatures",
"SECID-001",
"SECID-003",
"SECID-004",
"SECID-005",
"SECID-006",
"SECID-007",
// Category:  VulnerabilityandConfigurationAssessmentSolutionFeatures",
"SECVCA-001",
"SECVCA-002",
"SECVCA-003",
"SECVCA-004",
"SECVCA-005",
"SECVCA-006",
"SECVCA-007",
"SECVCA-008",
"SECVCA-009",
"SECVCA-010",
// Category:  ApplicationSecuritySolutionFeatures",
"SECAPP-001",
"SECAPP-002",
"SECAPP-003",
// Category:  StorageSolutionFeatures",
"STG-001",
"STG-002",
"STG-003",
"STG-004",
"STG-005",
"STG-006",
"STG-007",
"STG-008",
"STG-009",
"STG-010",
"STG-011",
"STG-012",
"STG-013",
"STG-014",
// Category:  SupplyChainSolutionFeatures",
"SCMTECH-001",
// Version:  "0.3"",
// Category:  SustainabilitySolutionFeatures",
"SUS-001",
// Category:  CloudOptimizationSolutionFeatures",
"SUSCO-001",
"SUSCO-002",
"SUSCO-003",
"SUSCO-004",
// Category:  ProductInnovationSolutionFeatures",
"SUSPI-001",
// Category:  TravelandHospitalitySolutionFeatures",
"TH-001",
"TH-002",
// Category:  SmartAssetsforTravelandHospitalitySolutionFeatures",
"THSA-001",
// Category:  DigitalCustomerEngagementforTravelandHospitalitySolutionFeatures",
"THDCE-001",
// Category:  TravelandHospitalityData360SolutionFeatures",
"TH360-001",
// Version:  "2022_q1_v1"",
// ValidationType: Foundational",
"INT-005",
"DSEC-011",
// BaselineType: AWSMarketplaceAMIandContainerBasedSolutions",
// ReleaseDate: "2022-03-15"",
// Category:  MarketplaceListing",
"MPL-001",
// BaselineType: CustomerDeployedEdgeSolution",
// Version:  "2021_q3_v1"",
// BaselineType: DataandMachineLearningSolutions",
"MPL-002",
// BaselineType: DirectConnect",
// ReleaseDate: "2021-11-08"",
// Category:  AWSRootAccount",
"ARC-001",
"ARC-002",
"ARC-003",
"ARC-004",
// Category:  CommunicationsfromAWS",
"ACOM-001",
"ACOM-002",
// Category:  CloudTrail",
"CTL-001",
"CTL-002",
"CTL-003",
"CTL-004",
// Category:  IdentityandAccessManagement",
"IAM-001",
"IAM-002",
"IAM-003",
"IAM-004",
"IAM-005",
"IAM-006",
"IAM-007",
"IAM-008",
"IAM-009",
"IAM-010",
"IAM-011",
"IAM-012",
// Category:  AmazonS3BucketAccess",
"S3-001",
"S3-002",
"S3-003",
// Category:  Cross-AccountAccess",
"CAA-001",
"CAA-007",
"CAA-002",
"CAA-004",
"CAA-005",
"CAA-006",
"CAA-003",
// Category:  DirectConnectInfrastructurePartners",
"INF-001",
// Category:  Architecture",
// Category: Index",
// BaselineType: PartnerHosted",
// Category:  ArchitectureReview",
"WAFR-001",
"ARC-005",
// Category:  BackupsandRecovery",
// Category:  DisasterRecovery",
"DR-001",
"DR-002",
"DR-004",
// Category:  SensitiveData",
"SDAT-001",
"SDAT-002",
"SDAT-003",
// Category:  ProtectedHealthInformation",
"BAABP-001",
"BAABP-004",
// Category:  RegulatoryComplianceValidationProcess",
"RCVP-001",
// BaselineType: PartnerHostedOutsideofAWS",
// Category:  IdentityandAccessManagement(AWSComponents)",
// Service: AmazonAPIGateway",
// ReleaseDate: "2020-05-25"",
// Category:  "{{Service}}Expertise"",
"APIGW-001",
"APIGW-002",
"APIGW-003",
"APIGW-004",
"APIGW-005",
"APIGW-006",
// Service: AmazonAurora",
// Category:  '{{Service}}Expertise'",
"ID:AUR-001",
"ID:AUR-002",
"ID:AUR-003",
"ID:AUR-004",
"ID:AUR-005",
// Service: AWSCloudFormation",
"CFN-001",
"CFN-002",
"CFN-003",
"CFN-004",
"CFN-005",
"CFN-006",
"CFN-007",
"CFN-008",
"CFN-009",
// Service: AmazonCloudFront",
"CLDFRT-001",
"CLDFRT-002",
// Service: AWSConfig",
// ReleaseDate: "2020-07-16"",
"CFG-001",
"CFG-002",
"CFG-003",
"CFG-004",
// Service: AmazonConnect",
"CON-007",
"CON-008",
// Service: AWSDatabaseMigrationService",
"ID:DMS-001",
"ID:DMS-002",
"ID:DMS-003",
"EachcasestudymustincorporateatleastoneofthefollowingpatternsusingAWSDatabaseMigration// Service: ",
"ID:DMS-004",
// ValidationType: ServiceDelivery",
// Category: "{{Service}}"",
// Service: AWSDirectConnect",
"DXE-001",
"DXE-002",
"DXE-003",
"DXE-004",
"DXE-005",
"DXE-006",
// Category:  '{{Service}}CustomerReference'",
"DXC-001",
// Service: AmazonDynamoDB",
"ID:DYNAMODB-001",
"ID:DYNAMODB-002",
"ID:DYNAMODB-003",
// Service: AmazonEKS",
// ReleaseDate: "2022-04-06"",
"EKS-001",
"EKS-002",
"EKS-003",
"EKS-004",
"EKS-005",
"EKS-006",
"EKS-007",
"EKS-008",
"EKS-009",
"EKS-010",
"EKS-011",
"EKS-012",
"EKS-013",
"EKS-014",
"EKS-015",
"EKS-016",
"EKS-017",
// Service: AmazonEMR",
"ID:EMR-001",
"ID:EMR-002",
"ID:EMR-003",
"ID:EMR-004",
// Service: AWSGovCloud",
"ID:GOV-001",
"ID:GOV-002",
"ID:GOV-003",
"ID:GOV-004",
"ID:GOV-005",
// Service: AWSIoTAnalytics",
"ID:IOTC-001",
"ID:IOTC-002",
"ID:IOTC-003",
"ID:IOTC-004",
"ID:IOTC-005",
"ID:IOTC-006",
"ID:IOTC-007",
"ID:IOTC-008",
"ID:IOTC-009",
"ID:IOTC-010",
// Service: AWSIoTCore",
// Service: AWSIoTGreengrass",
"ID:IOTG-001",
"ID:IOTG-002",
"ID:IOTG-003",
"ID:IOTG-004",
"ID:IOTG-005",
"ID:IOTG-006",
// Service: AmazonKinesis",
"ID:KIN-001",
"ID:KIN-002",
"ID:KIN-003",
"ID:KIN-004",
// Service: AWSLambda",
"LAM-001",
"LAM-002",
"LAM-003",
"LAM-004",
"LAM-005",
"LAM-006",
"LAM-007",
// Service: AmazonOpenSearchService",
// ReleaseDate: "2022-05-02"",
// Version:  "Preview"",
"OPS-001",
"OPS-002",
"OPS-003",
"OPS-004",
// Service: AmazonQuickSight",
"ID:QS-001",
"ID:QS-002",
"ID:QS-003",
"ID:QS-004",
"ID:QS-005",
// Service: AmazonRDS",
// ReleaseDate: "2020-10-02"",
// Version:  "3.0"",
"ID:RDS-001",
"ID:RDS-002",
"ID:RDS-003",
"ID:RDS-004",
"ID:RDS-005",
"ID:RDS-006",
"ID:RDS-007",
"ID:RDS-008",
"ID:RDS-009",
// Service: AmazonRedshift",
"RED-001",
"RED-002",
"RED-003",
"RED-004",
// Service: AWSServiceCatalog",
"ID:SCG-001",
"ID:SCG-002",
"ID:SCG-003",
"ID:SCG-004",
// Service: AWSServerMigrationService",
"ID:SMS-001",
"ID:SMS-002",
"ID:SMS-003",
// Service: AWSSystemsManager",
"SSM-001",
"SSM-002",
// Service: AWSTransferFamily",
"TRAF-001",
"TRAF-002",
// Service: AWSWAF",
"ID:WAF-001",
"ID:WAF-002",
"ID:WAF-003",
// Service: AmazonEC2forMicrosoftWindowsServer",
"WIN-001",
"WIN-002",
// ReleaseDate: "2022-01-31"",
// Category:  "ProductDetails"",
"PR-001",
// Category:  "GeneralIntegrationFeatures"",
"GIF-001",
"GIF-002",
"GIF-003",
"GIF-004",
"GIF-005",
// Category:  MediaManagement,Monitoring/Analytics,andSecurity",
"MMS-001",
"MMS-002",
// Service: AmazonEC2Spot",
// Category:  "Flexibility"",
"FLEX-001",
"FLEX-002",
// Category:  "Elasticity"",
"ELAS-001",
// Category:  "Resiliency"",
"RES-001",
"RES-002",
"RES-003",
// Category:  "Documentation"",
// Category:  "ServiceIntegration"",
"SI-001",
"SI-002",
"SI-003",
"SI-004",
// Service: AmazonLinux",
// ReleaseDate: "2021-11-15"",
// Category:  "GeneralApplicationRequirement"",
"ALAPP-001",
// Category:  "GeneralIntegrationFeatures-DNFandotherfeatures"",
"ALGEN-001",
"ALGEN-002",
// Category:  DocumentationandSupport",
// Category:  "ApplicationFunctionalandPerformanceValidation"",
"ALFPV-001",
"ALFPV-002",
// Category:  "SecurityValidationonAmazonLinux"",
"ALSECV-001",
"ALSECV-002",
"ALSECV-003",
// Category:  PublicSupportAcknowledgment",
"PSA-001",
"PSA-002",
// Service: AmazonLinux2",
// Version:  "1.4"",
"AL2APP-001",
// Category:  "GeneralIntegrationFeatures-systemdsupportorsimilar"",
"AL2GEN-001",
"AL2GEN-002",
"AL2FPV-001",
"AL2FPV-002",
// Category:  "SecurityValidationonAL2"",
"AL2SECV-001",
"AL2SECV-002",
"AL2SECV-003",
"PD-001",
"PD-002",
// Category:  "DatabaseConfiguration"",
"DBCONFIG-001",
"DBCONFIG-002",
"DBCONFIG-003",
"DBCONFIG-004",
// Category:  "DatabaseConnection"",
"DBCONN-001",
"DBCONN-002",
"DBCONN-003",
"DBCONN-004",
"DBCONN-005",
// Category:  PerformanceValidation",
"FPVTOOL-001",
"FPVTOOL-002",
"FPVTOOL-003",
// Service: "AmazonRDS"",
// Version:  "1.3"",
"PD-003",
"PD-004",
"PD-005",
"PD-006",
"DBCONFIG-005",
"DBCONN-006",
// Category:  FunctionalandPerformanceValidation-BusinessApplications",
"FPVBA-001",
"FPVBA-002",
"#// Category:  ",
"*Library/driverversion:",
"GIF-006",
// Category:  BulkDataOperations",
"BDO-001",
"BDO-002",
"BDO-003",
"BDO-004",
"BDO-005",
"BDO-006",
// Category:  InteractiveUserQueries",
"IUQ-001",
"IUQ-002",
// Category:  DataWarehouseMonitoring",
"DWM-001",
"DWM-002",
// Service: AmazonSageMaker",
// ReleaseDate: "2022-04-29"",
// Category:  GeneralIntegrationFeatures",
// Category:  DataProcessingLifeCycle",
"DPLC-001",
// Category:  ModelDevelopmentLifeCycle",
"MDLC-001",
"MDLC-002",
"MDLC-003",
// Category:  ModelDeploymentLifeCycle",
"MDELC-001",
"MDELC-002",
// Category:  ModelMonitoringLifeCycle",
"MMLC-001",
// Service: AWSGraviton",
// ReleaseDate: "2021-12-31"",
// Category:  ProductDetails",
// Category:  Packaginganddistribution",
"DIS-001",
"DIS-002",
"DIS-003",
"DIS-004",
// Category:  Featuresanddevelopmentlifecycle",
"FDL-001",
"FDL-002",
"FDL-003",
// Version:  "1.5"",
// Category:  "CustomerCase-StudyRequirements"",
"CCR-001",
"CCR-002",
// Category:  AWSLambdaIntegrationRequirements",
"PR-002",
// Category:  "FunctionRuntimeIntegration"",
"FRI-001",
"FRI-002",
"FRI-003",
// Category:  "LambdaExtensions"",
"LEX-001",
// Category:  "FunctionDefinitionandDeployment"",
"FDD-001",
"FDD-002",
"FDD-003",
// Category:  "ApplicationManagementandDeployment"",
"AMD-001",
"AMD-002",
"AMD-003",
// Category:  "Third-PartyEventSources"",
"TES-001",
"TES-002",
"TES-003",
// Category:  "GovernanceandCompliance"",
"GVN-001",
// Service: AWSOutposts",
// Category:  "ProductRequirements"",
// Category:  "HighAvailability(HA)"",
"HA-001",
// Category:  "Testing"",
"TST-001",
"TST-002",
"TST-003",
"TST-004",
// Service: AWSPrivateLink",
// Version:  "1.6"",
// Category:  "ProductAvailabilityRequirement"",
"PAR-001",
"PAR-002",
"PAR-003",
// Category:  "IntegrationRequirements"",
// Category:  ManagedRulesandAdvancedThreatDetectionandMitigation",
"MRA-001",
"MRA-002",
// Category:  LoggingandAnalytics",
"LOA-001",
"LOA-002",

//#########################################################################################################################
//Requirements added by me that were not found in repository

// Category: AWS Account Configuration
"ACCT-001",
"ACCT-002",
"ACCT-003",

// Category: Cost Optimization
"COST-001"

  ];


  var data = "";
  for (var i = 0; i < requirements.length; i++) {
      var initialVal = document.getElementById(requirements[i]);
      if (initialVal != null){
 //var notesitem = GetAddlQAText(requirements[i]).trim();
//}
        //if (notesitem == ""){ continue; }
        //else{

        var boxContent = GetAddlQAText(requirements[i])

        if (boxContent == ""){
            continue
        }

        data = data + String(requirements[i]) +" " + ":" + "\n" + boxContent + "\n \n";
      }
      console.log("Exported item : " + requirements[i]);
  }
  alert(data);
}

function GetAddlQAText(requirement) {

var initialVal = document.getElementById(requirement);
  if (initialVal != null){

//return document.getElementById(requirement)
      return initialVal = initialVal.childNodes[2].childNodes[0]
    .childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0]
    .childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0]
    .childNodes[0].childNodes[0].childNodes[0].childNodes[0].value;

}
 }