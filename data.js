const TRAILS=[
{id:"crash",icon:"📊",title:"Tableau Public Crash Course",desc:"Seven short lessons on the free Tableau Public app, using Tableau's Sample Superstore. Interface, charts, filters, calcs, LODs, table calcs, dashboards and publishing.",units:[

{id:"tp1",title:"Meet Tableau Public and connect Superstore",
lesson:`<div class="goal"><b>Goal.</b> Install Tableau Public, connect Tableau's Sample Superstore, and find your way around the workspace.</div>
<p>This first lesson is setup. After this, every lesson uses the same Superstore file, so you only do this once.</p>
<p>Tableau Public is the free desktop app (Windows or Mac). You can save a workbook on your computer, and you can publish a viz to a public profile as a portfolio piece. It is not the paid Tableau Desktop. You can connect to files such as Excel, CSV and Google Sheets, but not to a private company SQL Server.</p>
<h3>Practice</h3>
<ol class="steps">
<li>On a Windows or Mac computer, open the official <a target="_blank" rel="noopener" href="https://www.tableau.com/products/public/download">Tableau Public download page</a> and install the free app. You will need a Tableau account.</li>
<li>Also sign up for a <a target="_blank" rel="noopener" href="https://public.tableau.com/">Tableau Public profile</a>. You will need it in lesson 7 when you publish.</li>
<li>Download Tableau's official Sample Superstore Excel file: <a target="_blank" rel="noopener" href="https://public.tableau.com/app/sample-data/sample_-_superstore.xls">sample_-_superstore.xls</a> (from the <a target="_blank" rel="noopener" href="https://public.tableau.com/app/learn/sample-data">Sample Data</a> page). It has three sheets: <b>Orders</b> (10,194 sales rows), <b>People</b> (regional managers) and <b>Returns</b> (296 returned orders).</li>
<li>Open Tableau Public. Under Connect, choose Microsoft Excel and open that file.</li>
<li>On the Data Source page, drag <b>Orders</b> onto the canvas. You should see familiar fields: Order ID, Order Date, Ship Date, Ship Mode, Customer ID, Customer Name, Segment, Country/Region, City, State/Province, Postal Code, Region, Category, Sub-Category, Product Name, Sales, Quantity, Discount and Profit.</li>
<li>Optional now, useful later: drag <b>Returns</b> onto the canvas and relate it to Orders on Order ID. Same idea as a left join on Order ID in SQL.</li>
<li>Click <b>Sheet 1</b> at the bottom. Pause and name the parts: Data pane on the left (dimensions above, measures below), Columns and Rows shelves at the top, Marks card (Color, Size, Label, Detail, Tooltip), Filters shelf, Show Me on the right, and sheet tabs along the bottom.</li>
</ol>
<p>Never publish confidential work data to Tableau Public. Superstore is a fictional retailer, so it is safe to practice and share.</p>
<div class="why"><b>Why interviews care.</b> A hiring manager often starts with "Walk me through how you would connect to a new dataset." If you can name the workspace and are honest about Public vs paid Desktop, you already sound like someone who has opened the tool, not someone who only watched a video.</div>`,
scenario:"Your interviewer says: 'We use Tableau. Have you used it?' You can say you have been practising on Tableau Public with Superstore, you know Public cannot talk to a private SQL Server, and you are used to exploring a new table the same way you did with SQL and Salesforce reports: scan the grain, the dates, the keys, then build one simple view.",
links:[["https://www.tableau.com/products/public/download","Download Tableau Public (official, free)"],["https://public.tableau.com/app/sample-data/sample_-_superstore.xls","Sample Superstore Excel file"],["https://public.tableau.com/app/learn/sample-data","Tableau Public Sample Data page"],["https://help.tableau.com/current/guides/get-started-tutorial/en-us/get-started-tutorial-connect.htm","Official tutorial: connect to Superstore"],["https://help.tableau.com/current/public/desktop/en-us/environment_workspace.htm","The Tableau workspace"],["https://www.tableau.com/learn/training","Official free Tableau training videos"]],
quiz:[
{q:"Which Superstore table holds the sales transactions you will use in most lessons?",o:["People","Returns","Orders","Sheet 1"],a:2,e:"Orders has 10,194 rows of product sales. People is a short list of regional managers. Returns is a list of returned order IDs."},
{q:"You publish a workbook to Tableau Public. Who can see it?",o:["Only you","Only people you email the link to","Anyone who finds your public profile or the link","Your company's Tableau admin"],a:2,e:"Published Tableau Public vizzes are public. Use Superstore or other safe sample data, never client or employer files."},
{q:"Tableau Public can connect to which of these?",o:["A private SQL Server at work","An Excel or CSV file, or Google Sheets","Any database Tableau Desktop can use","Only files already on Tableau Server"],a:1,e:"Public is free and limited. Files and a few cloud sources are fine. A private company database needs paid Tableau Desktop or a Server/Cloud connection."},
{q:"After you connect Superstore, where do you actually build a chart?",o:["On the Data Source page only","In a worksheet, for example Sheet 1","In the Tableau Public profile settings","In Show Me, without a sheet"],a:1,e:"The Data Source page is for tables and relationships. Charts live on worksheets."}
],
short:{q:"In two or three sentences, how would you describe Tableau Public to an interviewer, including one honest limit?",m:"Tableau Public is the free Tableau app for building charts and dashboards on a Windows or Mac computer. I have been practising with Tableau's Sample Superstore, and I can publish a viz to a public profile as a portfolio piece. The honest limit is that Public cannot connect to a private company database, and anything I publish is visible, so I would never put confidential data there."}},

{id:"tp2",title:"Dimensions, measures and basic charts",
lesson:`<div class="goal"><b>Goal.</b> Tell a dimension from a measure, tell blue pills from green pills, and build a bar chart and a line chart on Superstore.</div>
<p>This will feel familiar. In SQL you GROUP BY a column and SUM another. In Salesforce reports you group rows and summarise numbers. Tableau just makes that visual.</p>
<ul>
<li><b>Dimensions</b> (usually blue) slice the data: Category, Region, Segment, Customer Name, Order ID.</li>
<li><b>Measures</b> (usually green) are numbers you aggregate: Sales, Profit, Quantity, Discount.</li>
<li><b>Blue pills are discrete</b> (headers, like categories). <b>Green pills are continuous</b> (axes, like a sales axis or a continuous timeline). A date can be either. A discrete MONTH(Order Date) gives labels such as January, February. A continuous month gives a timeline such as Jan 2021, Feb 2021.</li>
</ul>
<h3>Practice</h3>
<ol class="steps">
<li>New sheet. Name it <b>Sales by Category</b>. Drag Category to Columns and Sales to Rows. Tableau makes a bar chart and wraps Sales as SUM(Sales). That is the same as <code>SELECT Category, SUM(Sales) GROUP BY Category</code>.</li>
<li>Drag Profit onto Color on the Marks card. You now see which categories make money and which are weaker. Hover a bar and read the tooltip.</li>
<li>Click the sort button on the toolbar so the bars sort by Sales, highest first.</li>
<li>New sheet. Name it <b>Monthly Sales</b>. Drag Order Date to Columns, click the pill and choose Month as a continuous date (green). Drag Sales to Rows. You get a line, like the monthly APJ metric packs you built at Lenovo.</li>
<li>Try Show Me: put State/Province on Detail, Profit on Color, and pick a map. Then try Sub-Category on Detail, Sales on Columns, Profit on Rows, for a scatter. You do not have to keep these. The point is to feel how Tableau reacts when you change the pills.</li>
</ol>
<p>A quiet trap: Profit Ratio is not in the file. When you need it, you will create <code>SUM([Profit]) / SUM([Sales])</code>, not an average of row-level ratios. Same rule as in SQL.</p>
<div class="why"><b>Why interviews care.</b> "What is the difference between a dimension and a measure?" and "What do blue and green pills mean?" come up all the time. If you can also say discrete versus continuous, you are already ahead of a lot of first-round answers.</div>`,
scenario:"A hiring manager puts Superstore in front of you and says: 'Show me sales by category, then sales over time.' You build the bar, sort it, then a continuous monthly line. You mention that Category is a dimension, Sales is a measure, and the date pill is continuous so it can draw a timeline.",
links:[["https://help.tableau.com/current/pro/desktop/en-us/datafields_typesandroles.htm","Dimensions and measures, blue and green"],["https://help.tableau.com/current/guides/get-started-tutorial/en-us/get-started-tutorial-home.htm","Official Get Started with Tableau tutorial"],["https://www.tableau.com/learn/training","Free training videos, including dimensions vs measures"]],
quiz:[
{q:"In Superstore, which field is a measure?",o:["Region","Segment","Profit","Category"],a:2,e:"Profit is a number you aggregate, usually SUM. Region, Segment and Category slice the view, so they are dimensions."},
{q:"You want a sales timeline across months and years, not a list of month names. What kind of date pill do you want?",o:["A discrete blue MONTH(Order Date)","A continuous green month of Order Date","Order Date on Color only","Order ID on Columns"],a:1,e:"A continuous month draws a timeline (Jan 2021, Feb 2021, and so on). A discrete month collapses all Januaries together unless you also add Year."},
{q:"Blue pills in a view usually mean the field is:",o:["A measure on an axis","Discrete, and it creates headers","A filter that cannot be changed","Always a date"],a:1,e:"Blue is discrete (headers, labels). Green is continuous (axes). This is separate from dimension vs measure, although they often travel together."},
{q:"You drag Category to Columns and Sales to Rows. Tableau shows bars of SUM(Sales). That is closest to which SQL?",o:["SELECT * FROM Orders","SELECT Category, SUM(Sales) FROM Orders GROUP BY Category","SELECT AVG(Sales) FROM Orders","SELECT Sales FROM Orders WHERE Category IS NOT NULL"],a:1,e:"Dimensions on shelves act like GROUP BY. Measures get aggregated, here as SUM(Sales)."}
],
short:{q:"How would you explain dimension vs measure, and blue vs green, in two or three sentences?",m:"Dimensions slice the data, like Category or Region. Measures are the numbers you aggregate, like SUM of Sales or Profit. Blue pills are discrete and make headers, green pills are continuous and make axes, and a date can be either depending on whether you want labels or a timeline."}},

{id:"tp3",title:"Filters, sorting and groups",
lesson:`<div class="goal"><b>Goal.</b> Filter a view, sort it on purpose, and group members, so a busy Superstore sheet becomes something a manager can read.</div>
<h3>Practice</h3>
<ol class="steps">
<li>New sheet: Sub-Category to Rows, Sales to Columns. You get a horizontal bar chart. Use the toolbar sort so Sales is descending. That is a computed sort, not A to Z. Official help on <a target="_blank" rel="noopener" href="https://help.tableau.com/current/pro/desktop/en-us/sortgroup_sorting_computed_howto.htm">sorting</a> is worth a skim.</li>
<li>Drag Region to the Filters shelf, keep all regions, then right-click the filter and choose Show Filter. Click West, then East, and watch the bars change. This is your interactive filter, like a report filter in Salesforce.</li>
<li>Drag Sales to Filters as well and choose "At least" 10,000. That is like SQL HAVING SUM(Sales) &gt;= 10000, because the filter is on the aggregated measure. A filter on Region is more like WHERE.</li>
<li>Right-click Sub-Category in the Data pane (or select a few small bars), and create a group. Put the tiny leftover sub-categories into an "Other" group so the chart is cleaner. You can also group from the field menu. See Tableau's <a target="_blank" rel="noopener" href="https://help.tableau.com/current/pro/desktop/en-us/sortgroup_groups_creating.htm">group help</a>.</li>
<li>Add a date filter: drag Order Date to Filters and pick a range, or Years and select the latest year. Good dashboards almost always let someone pick a time window.</li>
<li>One idea to remember for later: a normal dimension filter is added to context by right-clicking it and choosing Add to Context (the pill turns grey). Context filters run earlier than most other filters, which matters when you use FIXED LOD expressions in the next lesson.</li>
</ol>
<div class="why"><b>Why interviews care.</b> Anyone can make a bar chart. Interviewers look for whether you can tidy a view: sort by the metric that matters, filter to the question, and group noise so a leader can see the story in five seconds.</div>`,
scenario:"A sales lead says: 'I only care about the West, and I want the weakest sub-categories bunched into Other so the chart is not a laundry list.' You add a Region filter, sort by Sales, and group the long tail. That is the same instinct you used when you cleaned IBM backlog views so people could act on them.",
links:[["https://help.tableau.com/current/pro/desktop/en-us/filtering.htm","Filter data from your views"],["https://help.tableau.com/current/pro/desktop/en-us/filtering_context.htm","Context filters"],["https://help.tableau.com/current/pro/desktop/en-us/sortgroup_sorting_computed_howto.htm","Sort data in a visualization"],["https://help.tableau.com/current/pro/desktop/en-us/sortgroup_groups_creating.htm","Group your data"]],
quiz:[
{q:"You put SUM(Sales) on the Filters shelf and set it to at least 10,000. That is closest to which SQL idea?",o:["WHERE sales >= 10000 on each row","HAVING SUM(Sales) >= 10000","JOIN","UNION"],a:1,e:"A filter on an aggregated measure is applied after the grouping, like HAVING. A dimension filter is closer to WHERE."},
{q:"You want a bar chart of sub-categories from highest Sales to lowest, not A to Z. What do you use?",o:["A data source filter","A computed sort on Sales","An alias","A context filter"],a:1,e:"Use a computed sort on the measure. Alphabetical sort would hide the ranking."},
{q:"Why group small sub-categories into Other?",o:["It is required before you can sort","It deletes the rows from Superstore","It simplifies a long tail so the main story is easier to read","It converts dimensions into measures"],a:2,e:"Groups are for readability. The underlying rows stay in the data. You are just bundling members of a field."},
{q:"A context filter pill is usually which colour, and why might you use one?",o:["Blue, because it is a dimension","Grey, because it runs earlier and can feed FIXED LOD calculations","Green, because it is a measure","Orange, because it is a table calculation"],a:1,e:"Add to Context turns the pill grey. Context filters are applied earlier in Tableau's order of operations, which is how you make a FIXED LOD respect a Region or date filter."}
],
short:{q:"A stakeholder wants 'top sub-categories in the West last year, with the rest in Other.' What three Tableau moves do you make?",m:"Filter Order Date to last year and Region to West, sort Sub-Category by Sales descending, then group the smaller leftover members into an Other group. Show the Region and date filters so they can change the view themselves."}},

{id:"tp4",title:"Calculated fields and LOD expressions",
lesson:`<div class="goal"><b>Goal.</b> Write a solid Profit Ratio, then use FIXED, INCLUDE and EXCLUDE so you can answer questions that a plain SUM cannot.</div>
<p>Open Analysis, then Create Calculated Field. If you can write a CASE in SQL, you can write a calc in Tableau. The new part is level of detail.</p>
<h3>Practice: basic calcs</h3>
<ol class="steps">
<li>Create <b>Profit Ratio</b> as <pre>SUM([Profit]) / SUM([Sales])</pre> Format it as a percentage. Use this in a view, not <code>[Profit] / [Sales]</code> averaged later. The aggregate form is the company-level ratio, the same way you would write <code>SUM(profit) * 1.0 / SUM(sales)</code> in SQL. Averaging row-level ratios gives a different, usually wrong, number.</li>
<li>Create a simple flag, for example: <pre>IF [Profit] &gt; 0 THEN "Profitable"
ELSEIF [Profit] &lt; 0 THEN "Loss"
ELSE "Break even" END</pre> IIF and CASE work too, just like SQL.</li>
</ol>
<h3>Practice: the three LOD types</h3>
<p>LOD syntax lives in curly braces. You pick the grain yourself, instead of accepting only the grain of the view.</p>
<pre>{ FIXED [dimension] : AGG([measure]) }
{ INCLUDE [dimension] : AGG([measure]) }
{ EXCLUDE [dimension] : AGG([measure]) }</pre>
<ol class="steps">
<li><b>FIXED.</b> Create <b>First Order Date</b>: <pre>{ FIXED [Customer ID] : MIN([Order Date]) }</pre> This is each customer's first purchase date, no matter what else is on the sheet. Then create <b>Order Type</b>: <pre>IF [Order Date] = [First Order Date] THEN "New" ELSE "Repeat" END</pre> Put Order Type on a bar with COUNTD of Order ID. You now have new versus repeat orders, a very common product analytics move. In SQL this is a subquery or CTE that does <code>MIN(order_date) GROUP BY customer_id</code> and joins it back.</li>
<li><b>INCLUDE.</b> On a Region-only view, create <b>Sales per Customer</b>: <pre>{ INCLUDE [Customer ID] : SUM([Sales]) }</pre> Then take AVG of that field. You get average customer sales in each region, even though Customer ID is not on the sheet. INCLUDE computes at a finer grain than the view, then you aggregate the result.</li>
<li><b>EXCLUDE.</b> On a view with Category and Sub-Category, create: <pre>{ EXCLUDE [Sub-Category] : SUM([Sales]) }</pre> That returns the category total, ignoring Sub-Category. You can then build a percent of category. EXCLUDE computes at a coarser grain than the view.</li>
<li>Put Region on Filters and watch a FIXED calc. A normal dimension filter happens after FIXED, so the first-order date does not shrink when you pick a region. If you need FIXED to respect that filter, Add to Context. This is Tableau's order of operations, and it is a favourite interview topic.</li>
</ol>
<div class="why"><b>Why interviews care.</b> Calculated fields show you can think in business metrics, not only in raw columns. LOD questions separate people who clicked Show Me from people who can answer "average sales per customer by region" or "new versus returning."</div>`,
scenario:"A product lead asks: 'How many of last year's orders came from customers who had bought from us before?' You do not guess. You FIXED first order date at Customer ID, label each order New or Repeat, filter to last year, and COUNTD Order ID. That is the same grain-thinking you already use in SQL.",
links:[["https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields.htm","Create custom fields with calculations"],["https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_lod.htm","Level of Detail expressions"],["https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_lod_fixed.htm","FIXED LOD"],["https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_lod_include.htm","INCLUDE LOD"],["https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_lod_exclude.htm","EXCLUDE LOD"],["https://help.tableau.com/current/pro/desktop/en-us/order_of_operations.htm","Tableau's order of operations"]],
quiz:[
{q:"Which formula is the right Profit Ratio for a Category bar chart?",o:["AVG([Profit] / [Sales])","SUM([Profit]) / SUM([Sales])","SUM([Profit] / [Sales])","[Profit] / [Sales] with no aggregation"],a:1,e:"Ratio of sums is the true overall ratio. Averaging row-level ratios treats a tiny order the same as a huge one and usually misstates the result."},
{q:"{ FIXED [Customer ID] : MIN([Order Date]) } gives you:",o:["The first order date in the whole company","Each customer's first order date, independent of most filters in the view","The first order date visible in the current pane only","A table calculation of the running minimum"],a:1,e:"FIXED computes at the grain you name. Here that grain is Customer ID. A normal dimension filter will not change it unless you add that filter to context."},
{q:"You are looking at Sales by Region only, and you want the average of each customer's total sales in that region. Which LOD type fits best?",o:["EXCLUDE Customer ID","INCLUDE Customer ID, then average the result","A running total table calc","A data source filter"],a:1,e:"INCLUDE raises the calc to the customer grain even though Customer ID is not on the sheet, then you AVG those customer totals."},
{q:"A FIXED LOD ignores your Region filter. What is the usual fix if you want the filter to apply first?",o:["Change the pill from blue to green","Convert Region to a measure","Add the Region filter to context","Use a table calculation filter only"],a:2,e:"Context filters run before FIXED in the order of operations. That is the standard interview answer."},
{q:"EXCLUDE is most useful when you want to:",o:["Delete a field from the data source","Compute a coarser total than the dimensions in the view, such as a category total on a sub-category sheet","Replace a dimension filter","Force a pill to be continuous"],a:1,e:"EXCLUDE removes a dimension from the calc's grain. A common use is comparing a sub-category to its category total."}
],
short:{q:"In plain language, when do you use FIXED, INCLUDE and EXCLUDE?",m:"FIXED computes at a grain I name, and it stays at that grain even if the view is coarser or finer, unless a context filter changes the input. INCLUDE computes at a finer grain than the view, such as customer-level sales on a region sheet. EXCLUDE computes at a coarser grain than the view, such as a category total on a sub-category sheet."}},

{id:"tp5",title:"Table calculations: running totals, percent of total, YoY",
lesson:`<div class="goal"><b>Goal.</b> Use table calculations for running totals, percent of total, and year-over-year growth, and know when to use a table calc instead of an LOD.</div>
<p>Table calcs work on the numbers already in the view, not by going back to the data source. That is why "Compute Using" matters. If the percent of total looks wrong, the addressing is usually wrong, not the data.</p>
<h3>Practice</h3>
<ol class="steps">
<li><b>Running total.</b> Use your Monthly Sales sheet (continuous month of Order Date, SUM of Sales). Right-click SUM(Sales), choose Quick Table Calculation, then Running Total. The line becomes a cumulative total. You can also add Sales again and keep one as the monthly value and one as the running total. This is like <code>SUM(sales) OVER (ORDER BY month)</code> in SQL.</li>
<li><b>Percent of total.</b> New sheet: Category on Rows, Sales on Columns. Quick Table Calculation, Percent of Total. Check that the bars add up to 100%. If you add Region, you must decide Compute Using: percent of the whole table, or percent within each region (Pane). That choice is the interview gotcha.</li>
<li><b>Year over year.</b> On a continuous monthly Sales line, add a second Sales pill (or duplicate the sheet), then Quick Table Calculation, Year over Year Growth. You need more than one year in the data for this to mean anything. Superstore has that. Format as a percentage. This is the closest Tableau equivalent of a LAG over the same month last year.</li>
<li>Open the table calc editor once (Edit Table Calculation) and look at Compute Using. Do not panic. Just notice that Tableau needs to know which direction and which dimensions to walk along.</li>
</ol>
<p><b>Table calc or LOD?</b> If the answer is already in the layout of the viz (rank these bars, running total along this axis, percent of what is on screen), use a table calc. If you need a grain that is not in the view, or you need the result to stay stable when the layout changes, use an LOD or a basic aggregate calc. Tableau's own guide on <a target="_blank" rel="noopener" href="https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_understand_which.htm">choosing the right calculation type</a> is short and useful.</p>
<div class="why"><b>Why interviews care.</b> Product and BI roles live on "% of total" and "growth versus last year." They will also test whether you know a running total is a table calc, not a FIXED LOD.</div>`,
scenario:"A VP says: 'Don't just show monthly sales. I want to know how we are tracking against the year, and whether each category is a bigger or smaller slice than last time I looked.' You add a running total, a percent of total with the right Compute Using, and a YoY growth line.",
links:[["https://help.tableau.com/current/pro/desktop/en-us/calculations_tablecalculations.htm","Transform values with table calculations"],["https://help.tableau.com/current/pro/desktop/en-us/calculations_tablecalculations_definebasic_runningtotal.htm","Table calculation types, including running total"],["https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_understand_which.htm","Choosing the right calculation type"]],
quiz:[
{q:"A table calculation is computed:",o:["In the data source, before the view is drawn","On the marks already in the view","Only inside a FIXED LOD","Only after you publish to Tableau Public"],a:1,e:"Table calcs run on the query result that is already in the viz. That is why the layout and Compute Using change the answer."},
{q:"Your Category percent of total is correct, then you add Region and the percents look odd. What should you check first?",o:["The data source filter","Compute Using (table vs pane vs specific dimensions)","Whether Sales is a dimension","The Tableau Public row limit"],a:1,e:"Adding a dimension changes the table. You have to say whether 100% is the whole view or each pane, for example each region."},
{q:"Which of these is a natural table calculation, not an LOD?",o:["Each customer's first order date","Average sales per customer when Customer is not in the view","A running total of monthly sales along a time axis","A category total used on a sub-category sheet"],a:2,e:"Running totals, ranks, moving averages, percent of what is on screen, and year-over-year along a timeline are table calc territory. The other three are classic LOD cases."},
{q:"Year over Year Growth as a quick table calc needs:",o:["A single month of data","At least two years of dates in the view, usually on a continuous time axis","A context filter on Customer ID","A join to the People sheet"],a:1,e:"YoY compares a mark with the same period in the previous year. One year of data cannot produce a meaningful YoY."}
],
short:{q:"When would you use a table calculation instead of an LOD expression? Give one example of each.",m:"I use a table calc when the answer comes from the layout of the view, for example a running total along months or a percent of the bars on screen. I use an LOD when I need a grain that is not in the view, for example each customer's first order date, or a category total sitting next to a sub-category."}},

{id:"tp6",title:"Dashboards and actions",
lesson:`<div class="goal"><b>Goal.</b> Combine a few worksheets into a clean dashboard, and add a filter action so clicking one chart drives the others.</div>
<p>A dashboard is how you present the work. The charts you already built become tiles in one view, the same way you used to pack Lenovo APJ metrics into one pack instead of sending six loose reports.</p>
<h3>Practice</h3>
<ol class="steps">
<li>Make two small KPI sheets if you do not have them yet: one with SUM(Sales) as a big text number, one with Profit Ratio as a big text number. Hide the axis titles, give each sheet a short name, and format the numbers so they are easy to read from a distance.</li>
<li>Create a new Dashboard. For a portfolio piece, a laptop or a reasonably wide fixed size is safer than a tiny phone layout. You can still check the published viz on your phone later.</li>
<li>Drag a vertical or horizontal container if you want more control, then drop in your KPI tiles, Monthly Sales, and Sales by Category. Give the dashboard a real title, not "Dashboard 1".</li>
<li>Select a Region filter and choose Apply to Worksheets, then Selected Worksheets or All Using This Data Source, so one filter drives the whole view.</li>
<li>Add an action: Dashboard menu, Actions, Add Action, Filter. Source: the Category bar chart. Target: the monthly trend and the KPIs. Run on Select. Now a click on Technology should narrow the rest of the dashboard. Clear the selection to return to the full view. Official help: <a target="_blank" rel="noopener" href="https://help.tableau.com/current/pro/desktop/en-us/actions_dashboards.htm">Actions and Dashboards</a>.</li>
<li>Tidy it. Hide unused legends, shorten sheet titles, add a caption such as "Source: Tableau Sample Superstore." Five or six clear charts beat a crowded wall of ten.</li>
</ol>
<div class="why"><b>Why interviews care.</b> They are hiring someone who can tell a story for a busy stakeholder, not someone who dumps every worksheet onto one canvas. Filter and highlight actions show you thought about how a person will actually use the page.</div>`,
scenario:"Your hiring manager says: 'Take ten minutes and put a mini sales review in front of me.' You do not invent six new chart types. You place KPIs, a monthly trend, a category breakdown, one Region filter, and a click-to-filter action. Then you talk through what you would look at first.",
links:[["https://help.tableau.com/current/pro/desktop/en-us/dashboards.htm","Dashboards"],["https://help.tableau.com/current/pro/desktop/en-us/actions_dashboards.htm","Actions and dashboards"],["https://www.tableau.com/learn/training","Free training videos, including Building Dashboards"]],
quiz:[
{q:"A dashboard action that lets you click a category bar and shrink the monthly trend is usually which type?",o:["URL action","Highlight action only","Filter action","Extract refresh"],a:2,e:"A filter action passes the selected category to the target sheets. Highlight would just fade the other marks. URL would open a link."},
{q:"What is a good reason to use a layout container on a dashboard?",o:["It is the only way to add a filter","It helps you control how tiles stack and resize, instead of floating everything","It publishes the workbook automatically","It converts measures into dimensions"],a:1,e:"Containers keep a dashboard tidy as you add KPIs and charts. Floating everything usually turns messy."},
{q:"You add a Region filter but only one sheet changes. What did you probably forget?",o:["To create an LOD","To apply the filter to the other worksheets","To convert Region to a measure","To publish first"],a:1,e:"By default a filter often belongs to one sheet. Use Apply to Worksheets so the whole dashboard stays in sync."},
{q:"For a portfolio dashboard, which habit is the most professional?",o:["Leave sheets named Sheet 1, Sheet 2","Cram every worksheet you ever made onto one view","Give it a clear title, a source note, and only the charts that answer the question","Hide all filters so nobody can change it"],a:2,e:"A named, sourced, focused dashboard is what you would want to show a hiring manager. Clutter works against you."}
],
short:{q:"If you had 15 minutes to build a Superstore sales review dashboard, what would you put on it and how would it interact?",m:"I would put Sales and Profit Ratio KPIs at the top, a monthly sales trend, and a category or sub-category breakdown, with Region and date filters applied to all sheets. I would add a filter action so clicking a category updates the trend and the KPIs, and I would title it and note that the source is Sample Superstore."}},

{id:"tp7",title:"Publish to Tableau Public as a portfolio piece",
lesson:`<div class="goal"><b>Goal.</b> Publish a clean workbook to your Tableau Public profile and get a link you can put on a CV or LinkedIn.</div>
<p>This is the payoff. A live viz is stronger in an interview than a screenshot, because the hiring manager can click it.</p>
<h3>Practice</h3>
<ol class="steps">
<li>Before you publish, tidy the workbook. Rename every sheet you will show. Hide or delete practice sheets you do not want people to see. Check that filters work and that no dummy titles remain.</li>
<li>In Tableau Public, use Save to Tableau Public (also covered in Tableau's help: <a target="_blank" rel="noopener" href="https://help.tableau.com/current/pro/desktop/en-us/publish_workbooks_tableaupublic.htm">Save workbooks to Tableau Public</a>). Sign in with the profile you created in lesson 1.</li>
<li>Give the workbook a clear name, for example "Superstore Product Pulse - Azneeza Al", not "Book 1". Add a short description: what the dashboard answers, and that the data is Tableau's Sample Superstore.</li>
<li>Open the published link in a browser, then on your phone. Click the filters and the action. If something is cramped, go back to the desktop app, adjust, and save again.</li>
<li>Copy the profile or viz URL and keep it somewhere safe for your CV, LinkedIn and application forms.</li>
</ol>
<p><b>Be honest about the rules.</b> A published viz is public. Superstore is fine. A company's sales file is not. Tableau Public also cannot sit on a private warehouse, so a portfolio piece will almost always use a public or sample dataset. That is normal, and interviewers understand it.</p>
<p>You can also save a local copy on your computer so you do not depend only on the published version.</p>
<div class="why"><b>Why interviews care.</b> "Can you share a dashboard you have built?" is a very common ask for product and BI analyst roles. One published Superstore dashboard that you can talk through is enough to start. Quality beats volume.</div>`,
scenario:"A recruiter says: 'Send me something visual you have built.' You send your Tableau Public link, plus two sentences: this is a Superstore product dashboard with KPIs, a trend, a category mix and new versus repeat orders, built in Tableau Public as a portfolio piece.",
links:[["https://help.tableau.com/current/pro/desktop/en-us/publish_workbooks_tableaupublic.htm","Save workbooks to Tableau Public"],["https://public.tableau.com/","Tableau Public home and profiles"],["https://www.tableau.com/products/public/download","Download Tableau Public"]],
quiz:[
{q:"What should you do before you publish?",o:["Nothing, Tableau will tidy it for you","Rename sheets, hide unused practice tabs, and check that filters and actions work","Convert every dimension to a measure","Delete the data source so the file is smaller"],a:1,e:"People will see what you publish. Clean names and working filters are part of the impression."},
{q:"Why is Superstore a fair dataset for a public portfolio, but a live employer extract is not?",o:["Superstore has more rows","Published Tableau Public vizzes are visible, and Superstore is fictional sample data","Employer data cannot make charts","Tableau Public rejects Superstore"],a:1,e:"Public means public. Sample data is the safe way to show skill. Confidential data never goes on Tableau Public."},
{q:"A good published workbook name is:",o:["Book 1","Dashboard 2","Superstore Product Pulse - Azneeza Al","Sheet 1 final final"],a:2,e:"Use a name that says what it is and whose work it is. That is what a recruiter should land on."},
{q:"After publishing, a strong next step is:",o:["Never open the link again","Open the link on desktop and phone, test the interactions, then save the URL for your CV","Delete your Tableau Public profile","Email Tableau to make the viz private"],a:1,e:"You want to see what the hiring manager will see, including on a phone, and you want that URL ready for applications."}
],
short:{q:"How would you describe your Tableau Public portfolio piece in two sentences for a recruiter?",m:"I published a Superstore product dashboard on Tableau Public that shows sales and profit KPIs, a monthly trend, category mix, and new versus repeat orders, with filters and click actions. The data is Tableau's public Sample Superstore, which I used so I could share the viz without using confidential files."}}
]},

{id:"cap",icon:"🏁",title:"Product Analytics Capstone",desc:"Build one portfolio dashboard: product KPIs, a trend, category mix, new vs repeat orders, and a simple operations funnel on Superstore.",units:[
{id:"cap1",title:"Build a Superstore Product Pulse dashboard",
lesson:`<div class="goal"><b>Goal.</b> Build and publish one dashboard you can actually show. Think product analytics: KPIs, mix, trend, and new versus repeat, not a random gallery of charts.</div>
<p>Superstore is a fictional retailer, not a SaaS app, so we will not fake a signup funnel we do not have. We will build a product performance dashboard, plus an honest operations funnel: orders placed, orders kept (not returned), then profitable kept orders.</p>
<h3>Build this</h3>
<ol class="steps">
<li><b>KPI row.</b> Five small text sheets, or one sheet with Measure Names and Measure Values, showing: SUM(Sales), SUM(Profit), Profit Ratio (<code>SUM([Profit]) / SUM([Sales])</code>), Orders (<code>COUNTD([Order ID])</code>), and AOV (<code>SUM([Sales]) / COUNTD([Order ID])</code>). Format them so a VP can read them in one glance.</li>
<li><b>Monthly trend.</b> Continuous month of Order Date, Sales and Profit. Add a second view or a second pill for Year over Year Sales growth. This is your "is this getting better?" chart.</li>
<li><b>Product mix.</b> Category and Sub-Category, Sales as the bar, Profit Ratio on Color, sorted by Sales. This shows what sells and what actually makes money.</li>
<li><b>New vs repeat.</b> Use your FIXED calc: <code>{ FIXED [Customer ID] : MIN([Order Date]) }</code> and the New / Repeat Order Type flag. Chart COUNTD of Order ID (or SUM of Sales) by month, stacked or side by side, New vs Repeat. That is as close as Superstore gets to a retention-style view, and you should say so in an interview.</li>
<li><b>Operations funnel.</b> If you have not already, relate Returns to Orders on Order ID. Create a status such as: <pre>IF [Returned] = "Yes" THEN "Returned" ELSE "Kept" END</pre> Then count distinct orders for All, Kept, and Kept with Profit &gt; 0. Three numbers is enough. Do not dress it up as a product-led growth funnel. It is returns and profitability.</li>
<li><b>Dashboard.</b> Title it "Superstore Product Pulse". Add Region and Segment filters that apply to all sheets, and a filter action from Category to the trend and KPIs. Add a source note: Tableau Sample Superstore.</li>
<li><b>Publish</b> it to Tableau Public with a clean name, then save the link. That link is the thing you send when someone asks for a sample.</li>
</ol>
<p>If a sheet fights you, simplify. A clear four-chart dashboard you can explain is better than a crowded one you cannot defend.</p>
<div class="why"><b>Why this helps you get hired.</b> Product analyst and BI jobs want to see that you can turn a raw table into a decision view: how are we doing, what is the mix, is growth real, and are we keeping the customers we already won. You already did versions of this at Lenovo and IBM. This is that instinct, in Tableau.</div>`,
scenario:"A product manager says: 'I have one screen and five minutes before my next call. Tell me if Superstore is healthy.' You walk the KPIs first, then the trend and YoY, then mix (what is growing vs what is profitable), then new vs repeat, and you mention returns only if the funnel has moved. That is the briefing, not a tour of every sheet.",
links:[["https://help.tableau.com/current/pro/desktop/en-us/dashboards.htm","Dashboards"],["https://help.tableau.com/current/pro/desktop/en-us/actions_dashboards.htm","Dashboard actions"],["https://help.tableau.com/current/pro/desktop/en-us/publish_workbooks_tableaupublic.htm","Save to Tableau Public"],["https://public.tableau.com/app/sample-data/sample_-_superstore.xls","Sample Superstore file"]],
quiz:[
{q:"Why is SUM(Sales) / COUNTD(Order ID) a better AOV than AVG(Sales)?",o:["They are always the same","AVG(Sales) averages every order line, and one order can have several product lines","COUNTD is not allowed on Order ID","AOV cannot be built in Tableau Public"],a:1,e:"Superstore's grain is a line in an order, not one row per order. Average Sales would mix line amounts. AOV needs total sales divided by unique orders."},
{q:"The New vs Repeat view in this capstone is best described as:",o:["A true SaaS monthly retention cohort","A Superstore stand-in: first order vs later orders for each customer, using a FIXED first order date","A table calculation of rank","A map of returning stores"],a:1,e:"Be honest in interviews. This is new versus repeat orders from a first-purchase date, not a full product-analytics retention grid."},
{q:"The three-step funnel in this capstone uses which data?",o:["Website signup events","Orders, then non-returned orders, then profitable kept orders, using the Returns table","Only the People sheet","Year over year growth"],a:1,e:"Relating Returns on Order ID lets you separate kept orders from returned ones, then cut by profit. That is an operations funnel, and you should call it that."},
{q:"What makes this dashboard worth sending to a recruiter?",o:["It uses as many chart types as possible","It answers a business question, is interactive, is sourced, and is published on a public sample dataset","It is a single bar chart with no filters","It includes confidential Lenovo data"],a:1,e:"Hiring managers want a clear, interactive, honest portfolio piece. Sample data is a feature here, not a weakness, because you can share it."}
],
short:{q:"Write a four-line 'how I would talk through this dashboard' script for an interview.",m:"I would start with the KPIs: sales, profit, profit ratio, order count and average order value, so we agree on the headline. Then I would show the monthly trend and year-over-year growth to see whether the headline is improving. Next I would use the category mix, coloured by profit ratio, to separate what sells from what makes money, and I would use the New vs Repeat view to see whether growth is coming from new customers or from people who already bought. I would mention the returns funnel only if it changes the story, and I would be clear that this is Tableau's Sample Superstore, built in Tableau Public as a portfolio piece."}}
]},

{id:"ref",icon:"📘",title:"Desk Reference",desc:"A short cheat sheet of common functions, plus SQL to Tableau translations that will feel natural given your SQL background.",units:[

{id:"ref1",title:"Tableau function cheat sheet",
lesson:`<div class="goal"><b>Goal.</b> Keep a short list of functions you will actually type in interviews and on the capstone, and know where the official lists live.</div>
<p>You do not need to memorise every function. You need the ones that show up in product and BI work. Official catalogues: <a target="_blank" rel="noopener" href="https://help.tableau.com/current/pro/desktop/en-us/functions.htm">Functions in Tableau</a>, plus <a target="_blank" rel="noopener" href="https://help.tableau.com/current/pro/desktop/en-us/functions_functions_logical.htm">logical</a>, <a target="_blank" rel="noopener" href="https://help.tableau.com/current/pro/desktop/en-us/functions_functions_date.htm">date</a> and <a target="_blank" rel="noopener" href="https://help.tableau.com/current/pro/desktop/en-us/functions_functions_string.htm">string</a>.</p>
<div class="tablewrap"><table>
<tr><th>Need</th><th>Use</th></tr>
<tr><td>Totals, average, min, max, row count</td><td>SUM, AVG, MIN, MAX, COUNT</td></tr>
<tr><td>Unique orders or customers</td><td>COUNTD (count distinct)</td></tr>
<tr><td>Avoid a weird mix of values in a tooltip</td><td>ATTR (only returns a value when there is one distinct value)</td></tr>
<tr><td>Profit ratio</td><td>SUM([Profit]) / SUM([Sales])</td></tr>
<tr><td>Average order value</td><td>SUM([Sales]) / COUNTD([Order ID])</td></tr>
<tr><td>If / else logic</td><td>IF ... THEN ... ELSEIF ... ELSE ... END, or IIF, or CASE</td></tr>
<tr><td>Turn a null into zero</td><td>ZN([field]) or IFNULL([field], 0)</td></tr>
<tr><td>Date parts and math</td><td>YEAR, MONTH, DAY, DATETRUNC, DATEADD, DATEDIFF, TODAY, DATEPARSE</td></tr>
<tr><td>Text cleanup</td><td>LEFT, RIGHT, MID, TRIM, UPPER, LOWER, CONTAINS, SPLIT, FIND, REPLACE, LEN</td></tr>
<tr><td>Type changes</td><td>STR, INT, FLOAT, DATE</td></tr>
<tr><td>A grain you choose</td><td>{ FIXED ... }, { INCLUDE ... }, { EXCLUDE ... }</td></tr>
<tr><td>Running total, window, lag, rank</td><td>RUNNING_SUM, WINDOW_SUM, WINDOW_AVG, LOOKUP, INDEX, RANK, SIZE (or Quick Table Calculations)</td></tr>
</table></div>
<p>Two habits that save you in interviews: format the number (percent, currency, 0 decimals) so the story is obvious, and name the calc after the business idea (Profit Ratio, First Order Date), not Calc1.</p>
<div class="why"><b>Why interviews care.</b> They will not ask you to recite the function list. They will ask you to write Profit Ratio, a COUNTD, a DATE diff, or a FIXED first-order date on a whiteboard or in the tool.</div>`,
scenario:"An interviewer slides a marker across and says: 'Write average order value and a new-versus-repeat flag.' You write SUM(Sales)/COUNTD(Order ID), then a FIXED min order date at customer, then IF order date equals that date THEN New ELSE Repeat. Short and calm.",
links:[["https://help.tableau.com/current/pro/desktop/en-us/functions.htm","Functions in Tableau"],["https://help.tableau.com/current/pro/desktop/en-us/functions_functions_logical.htm","Logical functions"],["https://help.tableau.com/current/pro/desktop/en-us/functions_functions_date.htm","Date functions"],["https://help.tableau.com/current/pro/desktop/en-us/functions_functions_string.htm","String functions"]],
quiz:[
{q:"You need the number of unique orders on a sheet. Which function?",o:["COUNT([Order ID])","COUNTD([Order ID])","SUM([Order ID])","ATTR([Order ID])"],a:1,e:"COUNTD is count distinct. COUNT would count lines, and Superstore has several lines in one order."},
{q:"ZN([Profit]) is most useful when:",o:["You want to convert Profit into a dimension","A null would break a later calc, and you want to treat it as zero","You want a running total","You want to group sub-categories"],a:1,e:"ZN turns null into zero. That is handy in differences and ratios where a null would otherwise blank the result."},
{q:"Which pair is the usual way to get a customer's first purchase date?",o:["LOOKUP([Order Date], FIRST()) only","{ FIXED [Customer ID] : MIN([Order Date]) }","RANK([Order Date])","DATETRUNC('year', [Order Date])"],a:1,e:"A FIXED LOD at customer grain with MIN of Order Date is the standard pattern."},
{q:"DATETRUNC('month', [Order Date]) is closest to:",o:["A random date in that month","The first instant of that month, useful for monthly grain","A filter that keeps only January","A table calculation"],a:1,e:"DATETRUNC snaps a date down to the start of the period you name, like DATE_TRUNC in SQL."}
],
short:{q:"Write the Tableau formulas for Profit Ratio, AOV, and First Order Date.",m:"Profit Ratio: SUM([Profit]) / SUM([Sales]). AOV: SUM([Sales]) / COUNTD([Order ID]). First Order Date: { FIXED [Customer ID] : MIN([Order Date]) }."}},

{id:"ref2",title:"SQL to Tableau translations",
lesson:`<div class="goal"><b>Goal.</b> Map the SQL you already write onto Tableau pills and calcs, so the tool feels like a new coat, not a new language.</div>
<p>This one should make you smile. You have been doing this logic for years. Tableau is mostly a visual way to say the same thing.</p>
<div class="tablewrap"><table>
<tr><th>In SQL</th><th>In Tableau</th></tr>
<tr><td>SELECT Category, SUM(Sales) FROM Orders GROUP BY Category</td><td>Category on Rows or Columns, SUM(Sales) on the other shelf</td></tr>
<tr><td>WHERE Region = 'West'</td><td>Region on Filters, keep West (a dimension filter)</td></tr>
<tr><td>HAVING SUM(Sales) &gt;= 10000</td><td>SUM(Sales) on Filters, at least 10,000 (a measure filter)</td></tr>
<tr><td>COUNT(DISTINCT Order ID)</td><td>COUNTD([Order ID])</td></tr>
<tr><td>SUM(Profit) * 1.0 / SUM(Sales)</td><td>SUM([Profit]) / SUM([Sales]) as Profit Ratio</td></tr>
<tr><td>CASE WHEN Profit &gt; 0 THEN 'Profitable' ELSE 'Loss' END</td><td>IF [Profit] &gt; 0 THEN "Profitable" ELSE "Loss" END</td></tr>
<tr><td>DATE_TRUNC('month', order_date)</td><td>DATETRUNC('month', [Order Date]), or a month date pill</td></tr>
<tr><td>SUM(Sales) OVER (ORDER BY month)</td><td>Quick Table Calculation: Running Total, computed along the date</td></tr>
<tr><td>SUM(Sales) / SUM(SUM(Sales)) OVER ()</td><td>Quick Table Calculation: Percent of Total, with the right Compute Using</td></tr>
<tr><td>Sales this month vs LAG of the same month last year</td><td>Quick Table Calculation: Year over Year Growth on a continuous date</td></tr>
<tr><td>A CTE of MIN(order_date) GROUP BY customer_id, joined back</td><td>{ FIXED [Customer ID] : MIN([Order Date]) }</td></tr>
<tr><td>A finer grain inside a coarser query, then AVG</td><td>{ INCLUDE [Customer ID] : SUM([Sales]) }, then AVG</td></tr>
<tr><td>A coarser total beside a finer row (category total on a sub-category)</td><td>{ EXCLUDE [Sub-Category] : SUM([Sales]) }</td></tr>
<tr><td>LEFT JOIN Returns ON Orders.Order ID = Returns.Order ID</td><td>Relate Returns to Orders on Order ID on the Data Source page</td></tr>
<tr><td>COALESCE(profit, 0)</td><td>ZN([Profit]) or IFNULL([Profit], 0)</td></tr>
</table></div>
<p>When you get stuck in Tableau, ask: "How would I write this in SQL?" Then pick the matching move: a pill, a filter, a calc, an LOD, or a table calc. That is a very strong interview habit, and it is honest to your background.</p>
<div class="why"><b>Why interviews care.</b> A lot of product and BI roles still love SQL. If you can translate out loud, you show you understand the analysis, not only the clicks.</div>`,
scenario:"The interviewer is a data lead, not a Tableau specialist. She asks how you would get first-order date and then the share of repeat orders. You answer in SQL first, then say: in Tableau that CTE becomes a FIXED LOD, and the share can be a percent of total table calc or a simple ratio of COUNTD.",
links:[["https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_understand_which.htm","Choosing the right calculation type"],["https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_lod.htm","LOD expressions"],["https://help.tableau.com/current/pro/desktop/en-us/calculations_tablecalculations.htm","Table calculations"],["https://help.tableau.com/current/pro/desktop/en-us/order_of_operations.htm","Order of operations"]],
quiz:[
{q:"SQL WHERE Region = 'West' is closest to:",o:["A measure filter on SUM(Sales)","A dimension filter on Region","A FIXED LOD","A running total"],a:1,e:"Dimension filters behave like WHERE. Measure filters are closer to HAVING."},
{q:"A SQL CTE that computes MIN(order_date) per customer and joins it back is closest to:",o:["A highlight action","{ FIXED [Customer ID] : MIN([Order Date]) }","Show Me","A context filter on Category"],a:1,e:"FIXED is the usual Tableau form of a pre-aggregated subquery joined back to the grain you named."},
{q:"SUM(Sales) OVER (ORDER BY month) maps to:",o:["A data source filter","A running total table calculation along the date","INCLUDE Customer ID","A join to People"],a:1,e:"Window functions that walk down the result set are table calculations in Tableau."},
{q:"You want unique customers in the West with at least 3 orders. A fair Tableau plan is:",o:["Filter Region to West, then use COUNTD(Customer ID) and a customer-level order-count calc or LOD, and filter that result","AVG(Customer ID) with a map","Publish first, then filter","Group Region into Other"],a:0,e:"Region filter is WHERE. A FIXED or INCLUDE count of orders per customer is the grain you need, then you filter that like HAVING."}
],
short:{q:"A lead asks you to explain, in SQL terms, how you would build new vs repeat orders in Tableau. What do you say?",m:"In SQL I would write a CTE that takes MIN(order_date) grouped by customer_id and left join it back to orders. In Tableau that CTE is { FIXED [Customer ID] : MIN([Order Date]) }. Then I label a row New when Order Date equals that first date, otherwise Repeat, and I use COUNTD of Order ID or SUM of Sales to compare the two."}}
]}
];

const SIM=[
{q:"What is the difference between a dimension and a measure, and between blue and green pills?",
m:"A dimension slices the data, like Category or Region. A measure is a number I aggregate, like SUM of Sales or Profit. Blue pills are discrete and create headers. Green pills are continuous and create axes. A date can be either: a discrete month gives month names, a continuous month gives a timeline. I would show this quickly on Superstore if I had the tool open."},
{q:"How do you build Profit Ratio, and why not take the average of Profit / Sales on each row?",
m:"I use SUM([Profit]) / SUM([Sales]) and format it as a percentage. That is the overall ratio, the same as in SQL. If I average a row-level Profit/Sales, a tiny order counts as much as a large one, so the number is usually wrong. This matters on Superstore because one order can also have several product lines."},
{q:"When would you use a FIXED LOD instead of a table calculation? Give a real example.",
m:"I use a FIXED LOD when I need a grain that is not coming from the layout of the view. A classic one is first order date: { FIXED [Customer ID] : MIN([Order Date]) }. That stays at customer grain even if the sheet is only showing months or regions. I use a table calc when the answer is already in the view, for example a running total along months or a percent of the bars on screen. Table calcs also move when I change Compute Using. LODs do not depend on the visual layout in the same way."},
{q:"A FIXED first-order date does not change when you filter to one Region. Why, and what do you do?",
m:"That is Tableau's order of operations. A normal dimension filter is applied after FIXED, so the first-order date is still computed across all regions. If I want the Region filter to apply first, I add it to context (the pill turns grey). I would say that out loud, because it shows I know why the number looked 'wrong' and how to control it."},
{q:"How would you design a product dashboard for a VP who has five minutes?",
m:"I would start with a short KPI row: sales, profit, profit ratio, order count and average order value. Then a monthly trend with year-over-year growth, and a category or product mix coloured by profit ratio so we can see what sells versus what makes money. I would add a new versus repeat view from a first-order-date LOD, plus filters for time, region or segment, and a click action from category to the rest of the dashboard. I would keep it to a handful of charts and put a source note on it. This is the same briefing style I used when I packed Lenovo APJ metrics and IBM backlog views for busy stakeholders, just in Tableau."},
{q:"You have used SQL, Salesforce reports and Excel-style dashboards for years, but you are still early on Tableau. How do you talk about that honestly?",
m:"I would be straight: I am ramping on Tableau Public, and I have a published Superstore portfolio dashboard I can walk through. I am not going to claim years of Tableau. What I do bring is a long habit of turning operational data into metrics and stakeholder views, including Lenovo APJ metrics, IBM signings and backlog reporting, and Salesforce reports. In Tableau I map that SQL thinking onto pills, filters, calculated fields, LODs and table calcs, and I am practising every week so the clicks catch up with the thinking."},
{q:"What is the difference between Tableau Public, Tableau Desktop, and Tableau Server or Cloud?",
m:"Tableau Public is the free authoring app. I can build on files such as Excel, CSV or Google Sheets, save locally, and publish to a public profile. I would never put confidential data there. Tableau Desktop is the paid authoring tool and can connect to many company databases. Tableau Server or Tableau Cloud is where a company publishes and governs workbooks for internal users, with permissions, refreshes and shared data sources. If this team uses Server or Cloud, I would expect to learn their project structure and naming, but the way a worksheet and a dashboard work is the same family of skills."},
{q:"Walk me through how you would check Superstore to see whether growth is healthy.",
m:"I would look at sales and profit together, not sales alone, and I would look at profit ratio so a discounting spike does not hide a weaker margin. I would check the monthly trend and year-over-year growth, then split the mix by category and by new versus repeat orders using a FIXED first-order date. If sales are up only because of heavy discounting, or only because of new customers who never come back, I would say so. If I had the Returns table related, I would also check whether returns are eating the growth. Then I would pick one or two follow-up questions, not twenty charts."},
{q:"A stakeholder wants a 'funnel' on Superstore. What do you do, and what do you not claim?",
m:"I would not invent a signup or onboarding funnel the data does not have. Superstore is retail orders. I would offer an honest operations funnel: orders placed, orders not returned, then profitable kept orders, after relating the Returns table on Order ID. I would label it as returns and profitability, not as product-led growth. If they truly need retention or a conversion funnel, I would say we need event or customer-journey data, and I would explain what Superstore can and cannot support."}
];
