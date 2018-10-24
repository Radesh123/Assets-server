const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express();

app.use(express.static(path.join(__dirname, 'public')))

// Restfull API to get the my questions list
app.get('/accountLookup', function (req, res) {
    var lookupData = {
        "accountInformation": [
            {
                "accountNumber": "008812345",
                "accountName": "Test",
                "addressLine1": "7801 E 88th St",
                "addressLine2": ""
            },
            {
                "accountNumber": "00881234456",
                "accountName": "Test - 2",
                "addressLine1": "7801 E 88th St",
                "addressLine2": ""
            }
        ]
    }
    res.json(lookupData).status(200);
});

app.get('/standardize', function (req, res) {
    var standardizeData = {
        "errorIndicator": false,
        "address": {
            "addressLine1": "7801 E 88th St",
            "city": "Indianapolis",
            "state": "IN",
            "zip": "46256-1233"
        }
    }
    res.json(standardizeData).status(200);
});

app.get('/getAccountData', function (req, res) {
    var accountData = {
        "publicID": "ID-123",
        "accountNumber": "008812345",

        "locations": [],
        "addressLine1": "7801 E 88th St",
        "addressLine2": "",
        "businessName": "Test Business",
        "city": "Indianapolis",
        "state": "IN",
        "zipCode": "46256-1233",
        "accountDetails": {
            "nAICSCode": "1234",
            "subNiche": "sub-niche",
            "niche": "niche",
            "fein": "1234-1234",
            "businessStartedYear": "2018",
            "businessStartedMonth": "January",
            "firstName": "John",
            "lastName": "Doe"
        },
        "displayName": "Test-Business"
    }
    res.json(accountData).status(200);
});

app.get('/getClassifications', function (req, res) {
    var classificationData = {
        "id": "17",
        "jsonrpc": "2.0",
        "result": [{
            "publicID": "238320",
            "code": "75631",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Painting - Interior (Office)"
        }, {
            "publicID": "541214",
            "code": "64021",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Payroll Accounting (Condo Office)"
        }, {
            "publicID": "451110",
            "code": "59505",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Bicycle Shop - Retail Store"
        }, {
            "publicID": "446120",
            "code": "59991",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Cosmetic, Hair or Skin Preparation - Retail Store"
        }, {
            "publicID": "813110",
            "code": "01960",
            "classification": "Church",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Parsonage"
        }, {
            "publicID": "511140",
            "code": "71837",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Mailing or Addressing Company - Mailing List Compiling Services"
        }, {
            "publicID": "451120",
            "code": "59995",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Hobby, Craft or Artists' Supply - Retail Store"
        }, {
            "publicID": "453998",
            "code": "58004",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Bone, Horn and Ivory Products - Retail Store"
        }, {
            "publicID": "32311",
            "code": "50812",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Bookbinding and Printing Supplies - Retail Store"
        }, {
            "publicID": "323120",
            "code": "71888",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Photoengraving"
        }, {
            "publicID": "531110",
            "code": "65146",
            "classification": "Habitational",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Apartment Building - Over 4 families - No commercial occupancy"
        }, {
            "publicID": "561740",
            "code": "74261",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Carpet, Rug, Furniture or Upholstery Cleaning - On customer's premises (Shop)"
        }, {
            "publicID": "541410",
            "code": "63871",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Interior Decorator (Office) - No Contracting Exposure"
        }, {
            "publicID": "561599",
            "code": "64121",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Ticket Agency - Theatrical (Office)"
        }, {
            "publicID": "448320",
            "code": "56992",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Clothing Store - Leather Products or Hide Stores"
        }, {
            "publicID": "451212",
            "code": "59935",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Newsstands"
        }, {
            "publicID": "561310",
            "code": "63761",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Employment Agency (Office)"
        }, {
            "publicID": "531130",
            "code": "09411",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Self-storage Facilities"
        }, {
            "publicID": "238210",
            "code": "74541",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Electrical Work - Within Buildings (Shop)"
        }, {
            "publicID": "541219",
            "code": "63671",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Bookkeeping - Office"
        }, {
            "publicID": "443141",
            "code": "57224",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Home Furnishings - Retail Store"
        }, {
            "publicID": "444190",
            "code": "57134",
            "classification": "Retail",
            "nicheClassification": "Church",
            "classCodeBasisCode": "Floor Covering - Retail Store - Wood or Ceramic Tile Only"
        }, {
            "publicID": "541110",
            "code": "63931",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Lawyer (Condo Office)"
        }, {
            "publicID": "423920",
            "code": "50641",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Hobby, Craft or Artists' Supply - Distributor"
        }, {
            "publicID": "442110",
            "code": "57121",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Furniture Store - Upholstered"
        }, {
            "publicID": "621491",
            "code": "63821",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Health Maintenance Organization (Condo Office)"
        }, {
            "publicID": "811490",
            "code": "71961",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Tailoring or Dressmaking - Custom"
        }, {
            "publicID": "531210",
            "code": "64071",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Real Estate Agent (Condo Office)"
        }, {
            "publicID": "238390",
            "code": "74681",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Furniture or Fixtures - Installation in Offices or Stores - Portable (Office)"
        }, {
            "publicID": "541860",
            "code": "71837",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Mailing or Addressing Company - Direct Mailing Company"
        }, {
            "publicID": "448190",
            "code": "56319",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Clothing Store - Ladies' Specialty Stores"
        }, {
            "publicID": "448320",
            "code": "58013",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Luggage Goods - Retail Store"
        }, {
            "publicID": "238990",
            "code": "74471",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Driveway, Parking Area or Sidewalk Repair - Paving or Re-paving (Office)"
        }, {
            "publicID": "532230",
            "code": "57338",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Video Store - Rental"
        }, {
            "publicID": "524210",
            "code": "63861",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Insurance Agent (Condo Office)"
        }, {
            "publicID": "444190",
            "code": "57155",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Glass Dealers and Glaziers - Retail Store"
        }, {
            "publicID": "238210",
            "code": "74561",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Electrical Work - Within Buildings (Office)"
        }, {
            "publicID": "421120",
            "code": "50111",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Auto Parts and Supplies - Distributor"
        }, {
            "publicID": "23599",
            "code": "74841",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Home Furnishings - Installation - Not Otherwise Classified (Shop)"
        }, {
            "publicID": "444190",
            "code": "58005",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Ceramic Store"
        }, {
            "publicID": "448190",
            "code": "56312",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Clothing Store - Ladies' Undergarments and Lingerie"
        }, {
            "publicID": "445310",
            "code": "59215",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Beverage Store - Liquor and Wine"
        }, {
            "publicID": "561599",
            "code": "64141",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Ticket Agency - Other Than Theatrical (Office)"
        }, {
            "publicID": "311811",
            "code": "71311",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Bakery - Retail Store  - With Baking On Premises"
        }, {
            "publicID": "445220",
            "code": "54216",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Fish or Seafood - Retail Store"
        }, {
            "publicID": "722513",
            "code": "09211",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Pizza Shops - Limited Cooking"
        }, {
            "publicID": "453998",
            "code": "50811",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Precision and Scientific Tools and Instruments - Retail Store"
        }, {
            "publicID": "453210",
            "code": "59435",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Stationery or Paper Products - Retail Store"
        }, {
            "publicID": "238990",
            "code": "74591",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Fence Erection (Office)"
        }, {
            "publicID": "423460",
            "code": "50721",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Optical Goods - Distributor"
        }, {
            "publicID": "451211",
            "code": "59425",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Book and Magazine Store - New"
        }, {
            "publicID": "811211",
            "code": "71921",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Television or Radio Receiving Set Installation or Repair"
        }, {
            "publicID": "235710",
            "code": "74341",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Concrete Construction (Office)"
        }, {
            "publicID": "238220",
            "code": "75811",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Plumbing - Residential or Domestic (Office)"
        }, {
            "publicID": "423220",
            "code": "50351",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Floor Covering - Distributor"
        }, {
            "publicID": "541810",
            "code": "63651",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Advertising - Office"
        }, {
            "publicID": "722513",
            "code": "09111",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Drive-ins/Service in Car - Fast Food"
        }, {
            "publicID": "561438",
            "code": "71877",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Copying and Duplicating - Retail Store"
        }, {
            "publicID": "238140",
            "code": "75511",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Masonry Contractor (Office)"
        }, {
            "publicID": "453998",
            "code": "58012",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Janitorial Supplies - Retail Store"
        }, {
            "publicID": "453110",
            "code": "59685",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Florist - Retail Store"
        }, {
            "publicID": "424310",
            "code": "50321",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Fabric Distributor"
        }, {
            "publicID": "451110",
            "code": "56613",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Shoe Store"
        }, {
            "publicID": "811430",
            "code": "71926",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Shoe Store - Repair Only"
        }, {
            "publicID": "423850",
            "code": "50651",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Janitorial Supplies - Distributor"
        }, {
            "publicID": "541410",
            "code": "74861",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Interior Decorator (Office) - Contractor"
        }, {
            "publicID": "238990",
            "code": "74481",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Driveway, Parking Area or Sidewalk Repair - Paving or Re-paving (Shop)"
        }, {
            "publicID": "722515",
            "code": "09061",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Concession Stands/Snack Bars - Limited Cooking"
        }, {
            "publicID": "541410",
            "code": "63881",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Interior Decorator (Condo Office) - No Contracting Exposure"
        }, {
            "publicID": "711510",
            "code": "71976",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Taxidermist"
        }, {
            "publicID": "722513",
            "code": "09151",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Fast Food - Hamburger/Malt Shops"
        }, {
            "publicID": "561311",
            "code": "63771",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Employment Agency (Condo Office)"
        }, {
            "publicID": "452990",
            "code": "53315",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Variety Store - Discount House"
        }, {
            "publicID": "561440",
            "code": "63691",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Collection Agency- Office"
        }, {
            "publicID": "711510",
            "code": "71899",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Photographer"
        }, {
            "publicID": "524298",
            "code": "63831",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Inspection and Appraisal Company (Office)"
        }, {
            "publicID": "722515",
            "code": "09011",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Cafes - Limited Cooking"
        }, {
            "publicID": "238320",
            "code": "75691",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Paper Hanging (Office)"
        }, {
            "publicID": "722511",
            "code": "09621",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Bistros, Brasseries and Cafes - With Alcohol Sales"
        }, {
            "publicID": "541410",
            "code": "74871",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Interior Decorator (Shop) - Contractor"
        }, {
            "publicID": "444190",
            "code": "52114",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Building Materials - Other Than Secondhand Equipment Dealers - Retail Store"
        }, {
            "publicID": "451130",
            "code": "53985",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Dry Goods (New Goods Only, Including Fabrics, Yarn and Piece Goods) - Retail Store"
        }, {
            "publicID": "722511",
            "code": "09431",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Fine Dining -  Alcohol Sales Up to 30% of Total Sales"
        }, {
            "publicID": "531110",
            "code": "65144",
            "classification": "Habitational",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Apartment  Building - Under 4 families - No commercial occupancy"
        }, {
            "publicID": "541940",
            "code": "64181",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Veterinarian (Office)"
        }, {
            "publicID": "444120",
            "code": "52322",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Paint, Wallpaper or Wallcovering - Retail Store"
        }, {
            "publicID": "812210",
            "code": "71866",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Funeral Home or Chapel - With Crematory"
        }, {
            "publicID": "448150",
            "code": "56113",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Clothing Store - Haberdashery and Men's Furnishings"
        }, {
            "publicID": "722513",
            "code": "09121",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Drive-ins/Service in Car - Limited Cooking"
        }, {
            "publicID": "811412",
            "code": "71212",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Appliances and Accessories Installation, Service and Repair (Commercial or Household)"
        }, {
            "publicID": "531110",
            "code": "65145",
            "classification": "Habitational",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Apartment Building - Under 4 families - With commercial occupancy"
        }, {
            "publicID": "722513",
            "code": "09071",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Delicatessens and Sandwich Shops - Fast Food"
        }, {
            "publicID": "531110",
            "code": "65141",
            "classification": "Habitational",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Townhouse or Similar Association - 4 families or fewer - With no mercantile or Office occupancy"
        }, {
            "publicID": "448150",
            "code": "59993",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Wig Store"
        }, {
            "publicID": "238990",
            "code": "74831",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Home Furnishings -  Installation - Not Otherwise Classified (Office)"
        }, {
            "publicID": "451130",
            "code": "56311",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Fabric Store"
        }, {
            "publicID": "488991",
            "code": "71837",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Mail Box or Packaging Store - Packing and Preparing Goods For Shipping"
        }, {
            "publicID": "452990",
            "code": "53317",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Variety Store - Five and Ten Cent"
        }, {
            "publicID": "533110",
            "code": "65132",
            "classification": "Habitational",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Townhouse or Similar Associations - Over 4 families - With no mercantile or office occupancy"
        }, {
            "publicID": "722513",
            "code": "09261",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Take Out Only Restaurants - Limited Cooking (No On-Premises Food Consumption)"
        }, {
            "publicID": "62111",
            "code": "63981",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Medical Office (Office)"
        }, {
            "publicID": "424480",
            "code": "50391",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Fruit or Vegetable - Distributor"
        }, {
            "publicID": "541219",
            "code": "63611",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Accounting (Non CPA) - Office"
        }, {
            "publicID": "423420",
            "code": "50813",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Office and Store Equipment - Distributor"
        }, {
            "publicID": "448120",
            "code": "56214",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Clothing Store - Ladies' and Girls' (Coats, Suits and Dresses)"
        }, {
            "publicID": "424340",
            "code": "50231",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Clothing Distributor - Men's and Boy's Clothing and Furnishings"
        }, {
            "publicID": "448150",
            "code": "50333",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Clothing Store - Men's and Boys' Hats and Caps"
        }, {
            "publicID": "311330",
            "code": "54467",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Candy or Confectionery Store - With chocolate confectionery Manufacturing on Premises"
        }, {
            "publicID": "812113",
            "code": "71952",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Nail Salon"
        }, {
            "publicID": "443130",
            "code": "59955",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Camera Store - Including Photographic Equipment"
        }, {
            "publicID": "424930",
            "code": "50381",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Florist - Distributor"
        }, {
            "publicID": "424340",
            "code": "50231",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Clothing Distributor - Women's, Children's and Infants' Clothing and Accessories"
        }, {
            "publicID": "561730",
            "code": "74901",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Landscape Gardening - No Tree Removal or Excavation (Shop)"
        }, {
            "publicID": "541219",
            "code": "63681",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Bookkeeping - Condo Office"
        }, {
            "publicID": "323111",
            "code": "71912",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Printing"
        }, {
            "publicID": "722515",
            "code": "09171",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Ice Cream and Yogurt Stores - Limited Cooking"
        }, {
            "publicID": "453910",
            "code": "59997",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Pet Store"
        }, {
            "publicID": "813110",
            "code": "58024",
            "classification": "Church",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Church"
        }, {
            "publicID": "445292",
            "code": "54457",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Candy or Confectionery Store  - No Manufacturing on Premises"
        }, {
            "publicID": "722515",
            "code": "09021",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Cafeteria - Fast Food - Buffet"
        }, {
            "publicID": "448130",
            "code": "56413",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Clothing Store - Children's and Infants' Wear"
        }, {
            "publicID": "722513",
            "code": "09131",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Drug Store - Fast Food Restaurant"
        }, {
            "publicID": "221310",
            "code": "65161",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Water Company (Condo Office)"
        }, {
            "publicID": "424410",
            "code": "50481",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Grocery - Distributor"
        }, {
            "publicID": "23599",
            "code": "74101",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Appliances and Accessories - Installation, Service and Repair (Office - Household Only)"
        }, {
            "publicID": "812111",
            "code": "71332",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Barber Shop"
        }, {
            "publicID": "238220",
            "code": "74021",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Air Conditioning Systems or Equipment - Installation or Repair (Shop)"
        }, {
            "publicID": "442110",
            "code": "57128",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Furniture Store - Wood Or Metal"
        }, {
            "publicID": "561740",
            "code": "74251",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Carpet, Rug, Furniture or Upholstery Cleaning - On customer's premises (Office)"
        }, {
            "publicID": "332812",
            "code": "71842",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Engraving"
        }, {
            "publicID": "451110",
            "code": "59526",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Sporting Goods or Athletic Equipment Store (Including Apparel)"
        }, {
            "publicID": "423940",
            "code": "50661",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Jewelry - Distributor"
        }, {
            "publicID": "442299",
            "code": "58017",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Painting, Picture or Frame - Retail Store"
        }, {
            "publicID": "561720",
            "code": "76221",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Residential Cleaning (Office)"
        }, {
            "publicID": "238220",
            "code": "74781",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Heating or Combined Heating and Air Conditioning Equipment - Installation, Servicing, Repair (Shop)"
        }, {
            "publicID": "442210",
            "code": "57134",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Floor Covering - Retail  Store - Except Wood or Ceramic Tile"
        }, {
            "publicID": "531312",
            "code": "60999",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Condominiums - Office (Association risk only)"
        }, {
            "publicID": "722511",
            "code": "09611",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Bistros, Brasseries and Cafes - No Alcohol Sales"
        }, {
            "publicID": "541191",
            "code": "64171",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Title Agent (Condo Office)"
        }, {
            "publicID": "453998",
            "code": "50925",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Office Machines or Appliances - Retail Store"
        }, {
            "publicID": "541940",
            "code": "64191",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Veterinarians (Condo Office)"
        }, {
            "publicID": "422490",
            "code": "50141",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Bakery - Distributor - No Baking On Premises"
        }, {
            "publicID": "445230",
            "code": "54315",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Fruit or Vegetable - Retail Store"
        }, {
            "publicID": "451140",
            "code": "57334",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Musical Instrument Store"
        }, {
            "publicID": "451110",
            "code": "59526",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Clothing Store - Athletic Apparel"
        }, {
            "publicID": "453998",
            "code": "58015",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Marble Products - Retail Store"
        }, {
            "publicID": "561599",
            "code": "64131",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Ticket Agency - Theatrical (Condo Office)"
        }, {
            "publicID": "238220",
            "code": "74011",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Air Conditioning Systems or Equipment - Installation or Repair (Office)"
        }, {
            "publicID": "445210",
            "code": "09081",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Delicatessens and Sandwich Shops - Limited Cooking"
        }, {
            "publicID": "722515",
            "code": "09101",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Donut Shops - Limited Cooking"
        }, {
            "publicID": "238330",
            "code": "74661",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Floor Covering -  Installation - Not Ceramic Tile or Stone (Shop)"
        }, {
            "publicID": "238340",
            "code": "76121",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Tile, Stone, Marble Mosaic or Terrazzo Work - Interior (Shop) - Includes incidental exterior work"
        }, {
            "publicID": "722513",
            "code": "09231",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Salad Bars - Limited Cooking"
        }, {
            "publicID": "722513",
            "code": "09241",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Fast Food - Seafood"
        }, {
            "publicID": "621491",
            "code": "63811",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Health Maintenance Organization (Office)"
        }, {
            "publicID": "722511",
            "code": "09641",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Diner - With Alcohol Sales"
        }, {
            "publicID": "445299",
            "code": "54516",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Dairy Products or Butter and Egg Store (Including Ice Cream)"
        }, {
            "publicID": "453220",
            "code": "59994",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Gift Shop"
        }, {
            "publicID": "443120",
            "code": "57326",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Computer Store"
        }, {
            "publicID": "423730",
            "code": "50581",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Heating or Combined Heating and Air Conditioning Equipment - Distributor"
        }, {
            "publicID": "722513",
            "code": "09181",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Fast Food - Oriental Style"
        }, {
            "publicID": "531312",
            "code": "60989",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Condominiums - Commercial (Association risk only)"
        }, {
            "publicID": "722511",
            "code": "09441",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Fine Dining -  Alcohol Sales Over 30% of Total Sales"
        }, {
            "publicID": "454110",
            "code": "58014",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Mail Order House - Retail Store"
        }, {
            "publicID": "62111",
            "code": "63991",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Medical Office (Condo Office)"
        }, {
            "publicID": "423450",
            "code": "50571",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Hearing Aid - Distributor"
        }, {
            "publicID": "443142",
            "code": "59955",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Photographic Equipment Store"
        }, {
            "publicID": "443142",
            "code": "57338",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Music Store - Pre-recorded"
        }, {
            "publicID": "722511",
            "code": "09661",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Family-style - With Alcohol Sales"
        }, {
            "publicID": "524210",
            "code": "63851",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Insurance Agent (Office)"
        }, {
            "publicID": "32311",
            "code": "50201",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Bookbinding and Printing Supplies - Distributor"
        }, {
            "publicID": "448150",
            "code": "59715",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Jewelry - Retail Store - Costume"
        }, {
            "publicID": "444110",
            "code": "53989",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Home Improvement Store"
        }, {
            "publicID": "423420",
            "code": "50691",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Office Machines or Appliances - Distributor"
        }, {
            "publicID": "238220",
            "code": "75821",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Plumbing - Residential or Domestic (Shop)"
        }, {
            "publicID": "722515",
            "code": "09001",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Cafes - Fast Food"
        }, {
            "publicID": "722511",
            "code": "09421",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Fine Dining - No Alcohol Sales"
        }, {
            "publicID": "722513",
            "code": "09141",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Drug Store - Limited Cooking Restaurant"
        }, {
            "publicID": "444220",
            "code": "59698",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Gardening and Light Farming Supply - Retail Store"
        }, {
            "publicID": "531110",
            "code": "65142",
            "classification": "Habitational",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Townhouses or Similar Association -  4 families or fewer - With mercantile or Office occupancy"
        }, {
            "publicID": "541219",
            "code": "63621",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Accounting (Non CPA) - Condo Office"
        }, {
            "publicID": "722511",
            "code": "09651",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Family-style - No Alcohol Sales"
        }, {
            "publicID": "448140",
            "code": "56325",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Clothing Store - Family Clothing Stores"
        }, {
            "publicID": "444190",
            "code": "58006",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Electrical Lighting Store"
        }, {
            "publicID": "422440",
            "code": "50671",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Meat - Distributor"
        }, {
            "publicID": "531311",
            "code": "69145",
            "classification": "Habitational",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Condominium - Residential (Association risk only)"
        }, {
            "publicID": "444190",
            "code": "58018",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Plumbing Supplies and Fixtures - Retail Store"
        }, {
            "publicID": "561440",
            "code": "63711",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Collection Agency - Condo Office"
        }, {
            "publicID": "812320",
            "code": "09501",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Laundry and Dry Cleaning - Using petroleum solvents - Under 3 pick-up stations"
        }, {
            "publicID": "562991",
            "code": "75961",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Septic Tank Systems - Cleaning (Office)"
        }, {
            "publicID": "423720",
            "code": "50741",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Plumbing Supplies and Fixtures - Distributor"
        }, {
            "publicID": "323111",
            "code": "71855",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Lithographing"
        }, {
            "publicID": "562991",
            "code": "75971",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Septic Tank Systems - Cleaning (Shop)"
        }, {
            "publicID": "441310",
            "code": "55313",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Auto Parts and Supplies - Retail Store"
        }, {
            "publicID": "531110",
            "code": "65147",
            "classification": "Habitational",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Apartment Building - Over 4 families - With commercial occupancy"
        }, {
            "publicID": "448150",
            "code": "59993",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Clothing Store - Wigs"
        }, {
            "publicID": "448190",
            "code": "56313",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Clothing Store - Hosiery"
        }, {
            "publicID": "524298",
            "code": "63841",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Inspection and Appraisal Company (Condo Office)"
        }, {
            "publicID": "446199",
            "code": "59974",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Hearing Aid - Retail Store"
        }, {
            "publicID": "448190",
            "code": "56814",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Clothing Store - Furs (Including Pelts)"
        }, {
            "publicID": "722513",
            "code": "09251",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Take Out Only Restaurants - Fast Food (No On-Premises Food Consumption)"
        }, {
            "publicID": "722511",
            "code": "09631",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Diner - No Alcohol Sales"
        }, {
            "publicID": "424460",
            "code": "50671",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Fish or Seafood - Distributor"
        }, {
            "publicID": "23599",
            "code": "74071",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Appliances and Accessories - Installation, Service and Repair (Office - Commercial Only)"
        }, {
            "publicID": "238330",
            "code": "74651",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Floor Covering - Installation - Not Ceramic Tile or Stone (Office)"
        }, {
            "publicID": "561599",
            "code": "64151",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Ticket Agency - Other Than Theatrical (Condo Office)"
        }, {
            "publicID": "722513",
            "code": "09161",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Fast Food - Hotdog Shops"
        }, {
            "publicID": "443141",
            "code": "57326",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Electronics Store"
        }, {
            "publicID": "238190",
            "code": "75541",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Metal Erection (Office)"
        }, {
            "publicID": "443141",
            "code": "57224",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Appliances and Accessories - Retail Store - Household Appliances and Home Furnishings"
        }, {
            "publicID": "238390",
            "code": "74691",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Furniture or Fixtures - Installation in Offices or Stores - Portable (Shop)"
        }, {
            "publicID": "722513",
            "code": "09031",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Fast Food - Chicken"
        }, {
            "publicID": "541211",
            "code": "63641",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Accounting (CPAs) - Condo Office"
        }, {
            "publicID": "812210",
            "code": "71865",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Funeral Home or Chapel"
        }, {
            "publicID": "541211",
            "code": "63631",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Accounting  (CPAs) - Office"
        }, {
            "publicID": "423730",
            "code": "50581",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Air Conditioning Systems or Equipment - Distributor"
        }, {
            "publicID": "541330",
            "code": "63791",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Engineers or Architects - Consulting only (Condo Office)"
        }, {
            "publicID": "448310",
            "code": "59715",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Jewelry - Retail Store - Precious"
        }, {
            "publicID": "541191",
            "code": "64161",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Title Agent (Office)"
        }, {
            "publicID": "238320",
            "code": "75641",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Painting - Interior (Shop)"
        }, {
            "publicID": "541330",
            "code": "63781",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Engineers or Architects - Consulting only (Office)"
        }, {
            "publicID": "561622",
            "code": "74811",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Locksmiths"
        }, {
            "publicID": "541810",
            "code": "63661",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Advertising - Condo Office"
        }, {
            "publicID": "722513",
            "code": "09221",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Fast Food - Roast Beef"
        }, {
            "publicID": "722513",
            "code": "09191",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Fast Food - Other Ethnic Style"
        }, {
            "publicID": "443142",
            "code": "57338",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Video Store - Sales"
        }, {
            "publicID": "421620",
            "code": "50081",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Appliances and Accessories - Distributor - Household and Home Furnishings"
        }, {
            "publicID": "238220",
            "code": "74961",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Lawn Sprinkler Installation (Shop)"
        }, {
            "publicID": "722513",
            "code": "09051",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Concession Stands/Snack Bars - Fast Food"
        }, {
            "publicID": "812310",
            "code": "09541",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Laundromat (Self-service) Non-supervised"
        }, {
            "publicID": "311340",
            "code": "54477",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Candy or Confectionery Store  - With nonchocolate confectionery Manufacturing on Premises"
        }, {
            "publicID": "452110",
            "code": "53127",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Department Store"
        }, {
            "publicID": "454110",
            "code": "73905",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Catalog or Premium Coupon Redemption Store"
        }, {
            "publicID": "561730",
            "code": "74891",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Landscape Gardening - No Tree Removal or Excavation (Office)"
        }, {
            "publicID": "722513",
            "code": "09091",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Donut Shops - Fast Food"
        }, {
            "publicID": "238990",
            "code": "74601",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Fence Erection (Shop)"
        }, {
            "publicID": "448110",
            "code": "56114",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Clothing Store - Men's and Boys' (Coats and Suits)"
        }, {
            "publicID": "238340",
            "code": "76111",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Tile, Stone, Marble Mosaic or Terrazzo Work - Interior (Office) - Includes incidental exterior work"
        }, {
            "publicID": "444130",
            "code": "52512",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Hardware and Tools - Retail Store"
        }, {
            "publicID": "422470",
            "code": "50671",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Poultry - Distributor"
        }, {
            "publicID": "453998",
            "code": "59983",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Refrigeration Systems or Equipment (Commercial) - Retail Store"
        }, {
            "publicID": "238320",
            "code": "75701",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Paper Hanging (Shop)"
        }, {
            "publicID": "443112",
            "code": "57326",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Appliances and Accessories - Retail Store - Radio, Television and Phonographic"
        }, {
            "publicID": "812310",
            "code": "09531",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Laundromat (Self-service) Supervised"
        }, {
            "publicID": "561910",
            "code": "71837",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Mail Box or Packaging Store - No Packing and Crating for Transportation"
        }, {
            "publicID": "423710",
            "code": "50501",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Hardware and Tools - Distributor"
        }, {
            "publicID": "235710",
            "code": "74351",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Concrete Construction (Shop)"
        }, {
            "publicID": "812112",
            "code": "71952",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Beauty Parlor and Hair Styling Salon (Including Nail Salons)"
        }, {
            "publicID": "424910",
            "code": "50471",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Gardening and Light Farming Supply - Distributor"
        }, {
            "publicID": "531210",
            "code": "64061",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Real Estate Agent (Office)"
        }, {
            "publicID": "221310",
            "code": "65111",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Water Company (Office)"
        }, {
            "publicID": "445210",
            "code": "54216",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Meat or Poultry- Retail Store"
        }, {
            "publicID": "533110",
            "code": "65133",
            "classification": "Habitational",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Townhouse or Similar Association -  Over 4 families - With mercantile or office occupancy"
        }, {
            "publicID": "812320",
            "code": "09521",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Laundry and Dry Cleaning - Using synthetic solvents - Under 3 pick-up stations"
        }, {
            "publicID": "238220",
            "code": "74951",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Lawn Sprinkler Installation (Office)"
        }, {
            "publicID": "445291",
            "code": "54606",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Bakery - Retail  Store - No Baking On Premises"
        }, {
            "publicID": "722511",
            "code": "09041",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Coffee Bar or Shops - Limited Cooking"
        }, {
            "publicID": "443111",
            "code": "58001",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Air Conditioning Systems or Equipment - Retail Store"
        }, {
            "publicID": "812320",
            "code": "71811",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Laundry and Dry Cleaning - Receiving Station"
        }, {
            "publicID": "722513",
            "code": "09201",
            "classification": "Restaurant",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Restaurant - Pizza Shops - Fast Food"
        }, {
            "publicID": "445110",
            "code": "54116",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Delicatessens - Retail Store (No Cooking) - See Restaurant - Delicatessens for Cooking"
        }, {
            "publicID": "443141",
            "code": "57223",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Sewing Machine Store"
        }, {
            "publicID": "23599",
            "code": "74081",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Appliances and Accessories - Installation, Service and Repair (Shop - Commercial Only)"
        }, {
            "publicID": "421850",
            "code": "50171",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Barber or Beauty Shop Supplies - Distributor"
        }, {
            "publicID": "561720",
            "code": "76231",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Residential Cleaning (Shop)"
        }, {
            "publicID": "23599",
            "code": "74111",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Appliances and Accessories - Installation, Service and Repair (Shop - Household Only)"
        }, {
            "publicID": "453998",
            "code": "59996",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Trophy Store"
        }, {
            "publicID": "541214",
            "code": "64011",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Payroll Accounting (Office)"
        }, {
            "publicID": "424110",
            "code": "50801",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Stationery or Paper Products - Distributor"
        }, {
            "publicID": "441320",
            "code": "55313",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Tire Dealer"
        }, {
            "publicID": "541110",
            "code": "63921",
            "classification": "Office",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Lawyer (Office)"
        }, {
            "publicID": "541890",
            "code": "76061",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Sign Painting or Lettering - Inside of Building (Shop) - No spray painting"
        }, {
            "publicID": "444190",
            "code": "58007",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Fence Dealer"
        }, {
            "publicID": "541890",
            "code": "76051",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Sign Painting or Lettering - Inside of Building (Office) - No spray painting"
        }, {
            "publicID": "235910",
            "code": "75551",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Metal Erection (Shop)"
        }, {
            "publicID": "238220",
            "code": "74771",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Heating or Combined Heating and Air Conditioning Equipment - Installation, Servicing, Repair (Office)"
        }, {
            "publicID": "446130",
            "code": "59954",
            "classification": "Retail",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Optical Goods - Retail Store"
        }, {
            "publicID": "339116",
            "code": "71444",
            "classification": "Services",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Dental Laboratory"
        }, {
            "publicID": "421620",
            "code": "50061",
            "classification": "Wholesale",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Appliances and Accessories - Distributor - Radio, TV and Audio Equipment"
        }, {
            "publicID": "238140",
            "code": "75521",
            "classification": "Contractor",
            "nicheClassification": "Small Business",
            "classCodeBasisCode": "Masonry Contractor (Shop)"
        }, {
            "publicID": "999999",
            "code": "99999",
            "nicheClassification": "Education",
            "classCodeBasisCode": "Education"
        }, {
            "publicID": "999999",
            "code": "99999",
            "nicheClassification": "Senior Living Care (SLC)",
            "classCodeBasisCode": "Senior Living Center (SLC)"
        }, {
            "publicID": "999999",
            "code": "99999",
            "nicheClassification": "Other",
            "classCodeBasisCode": "Non-Profit"
        }, {
            "publicID": "999999",
            "code": "99999",
            "nicheClassification": "Church",
            "classCodeBasisCode": "Church with Camp, Daycare or School"
        }]
    }
    res.json(classificationData).status(200);
});

app.get('/eligibilityQuestionsSet', function (req, res) {
    var questionsSet = [
        { code: 'question_1', question: 'Is the applicants business open past 12AM (midnight)?', options: [{ code: true, value: 'Yes' }, { code: false, value: 'No' }], type: 'boolean', answer: null },
        { code: 'question_2', question: 'Do all products comply with the Federal Food, Drug, and Cosmetic Act and FDA regulation in all other aspects?', options: [{ code: true, value: 'Yes' }, { code: false, value: 'No' }], type: 'boolean', answer: null },
        { code: 'question_3', question: 'Are products purchased directly from suppliers outside the United States?', options: [{ code: true, value: 'Yes' }, { code: false, value: 'No' }], type: 'boolean', answer: null },
        { code: 'question_4', question: 'Is the percentage of total floor area open to the public greater than 25%?', options: [{ code: true, value: 'Yes' }, { code: false, value: 'No' }], type: 'boolean', answer: null },
        { code: 'question_5', question: 'Are the annual gross sales derived from retail operations greater than 25%?', options: [{ code: true, value: 'Yes' }, { code: false, value: 'No' }], type: 'boolean', answer: null },
        { code: 'question_6', question: 'Does the applicant do any packaging or repackaging of any products to be sold under their own label?', options: [{ code: true, value: 'Yes' }, { code: false, value: 'No' }], type: 'boolean', answer: null },
        { code: 'question_7', question: 'What is the applicants radius (miles) of operations?', options: [{ code: true, value: 'Yes' }, { code: false, value: 'No' }], type: 'integer', answer: null },
        { code: 'question_8', question: 'Are the annual gross sales derived from off premises operations greater than 25%?', options: [{ code: true, value: 'Yes' }, { code: false, value: 'No' }], type: 'boolean', answer: null },
        { code: 'question_9', question: 'Do you sell, store, dispense, process or distribute marijuana/cannabis products, oil or paraphernalia on your premises for recreational and/or medicinal purposes?', options: [{ code: true, value: 'Yes' }, { code: false, value: 'No' }], type: 'boolean', answer: null },
        { code: 'question_10', question: 'Does the applicant operate out of a residence?', options: [{ code: true, value: 'Yes' }, { code: false, value: 'No' }], type: 'text', answer: null },
        { code: 'question_11', question: '', options: [{ code: 'male', value: 'Male' }, { code: 'female', value: 'Female' }, { code: 'others', value: 'Others' }], type: 'multi-choice', answer: null }
    ]

    res.json(questionsSet).status(200);
});


app.listen(PORT, () => console.log(`Listening on ${PORT}`))


