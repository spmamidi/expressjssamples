var express = require('express');
var app = express();
var exphbs = require('express3-handlebars');

app.engine('handlebars', exphbs({
	defaultLayout : 'main'
	}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	res.render('index');
});

app.get('/about', function(req, res){
	res.render('about', {layout : false});
});

app.get('/samplereport', function(req, res){
	
	res.render('samplereport', getServiceData());
});


app.use('/public', express.static('public'));

var port = Number(process.env.port || 5000);
app.listen(port);

function getServiceData(){
	var sampleData = {
		layout : false, 
		header :{
			'address' :{
				line1 : '607 14th St NW - The Westory',
				line2 : 'Washington, DC 20005 - East End Submarket'
			},
			userTitle : 'My Custom Report Header Title'
		},
		property : {
			title : 'PROPERTY',
			type : '4 Star Office - Delivers Jun 2014',
			rba : '260,779 SF',
			stories : '11',
			typicalFloor : '23,623 SF',
			coreFactor : '12.4%',
			landArea : '11',
			yearBuilt : '1990',
			yearRemoved : 'Mar 2012',
			Class : 'A'
		},
		imageAlley : {
			title : 'Property Images',
			assets: [ {
				path : 'public/image1.png'
			},
			{
				path : 'public/image2.png'
			}, 
			{
				path : 'public/image3.png'
			}] 
		},
		contacts : {
			title : 'CONTACTS',
			trueOwner: 'Deka Immobilien Investment GmbH - (202) 883-8940',
			recordOwner: 'Deka USA Westory, LP',
			developer : 'Lincoln Property Company',
			propertyManager : 'Carr Properties',
			architect : 'Shalom Baranes Associates, PC',
			salesCompany : {
				lines : ['HFF', 'Dan Swanson (202) 499-8499']
			},
			landlordRep : {
				lines : ['Cassidy Turley', 'Laurie McMahon (202) 266-1185, Zeke T. Dodson (202) 994 - 9940,', 'Kerri Mulligan Salih (202) 463-1353']
			}
		},
		notes: {
			title : 'PROPERTY NOTES',
			description: 'Building is centrally situated near the White House, the U.S. Capitol and the headquarters of major federal agencies. On the corner of 14th and F Streets, adjacent to the Willard and the Shops at National Place, one block from the Metro Center subway station, ten minutes from National Airport and within walking distance of Washingtonâ€™s finest restaurants, hotels, theaters, and department stores. The existing Westory building is a Beaux Arts-inspired neoclassical office tower completed in 1908. The original rich detail of its terra cotta base, upper stories and cornices have been preserved and refurbished. The new structure, its highly articulated limestone facade crowned by series of massive trusses, was designed by Shalom Baranes Associates to create an image clearly of its time, yet complimentary to the existing Westory building.'
		},
		marketConditions : {
			title : 'MARKET CONDITIONS'
		},
		saleNotes: {
			title : 'SALE NOTES',
			description: 'This transaction represents the sale of the The Westory at 607 14th St NW in Washington, DC. This 260,779 square-foot office property sold for $159,359,500 on July 17, 2012. The listing broker and buyer were able to confirm the sale price and other details of the transaction.      <br><br>      The property was about 91 percent occupied at the time of sale and traded at a 5.5 percent cap rate.'					
		}
	};
	return sampleData;
	
}