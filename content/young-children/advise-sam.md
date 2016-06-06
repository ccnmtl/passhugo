---
title: "Advise Sam"
module: "Young Children"
type: "module_page"
ordinal: 6
depth: 5
next: "../sams-summary/"
previous: "../sam/"
---
<h3></h3>




<a href="#" onclick="return false" id="hide-show-label">Hide Map</a>

<div class="careermapblock">

<!-- which questions to show when basemaps and layers are turned on and off -->
<div id="question_json">
    {&quot;basemaps_to_questions&quot;: {&quot;1&quot;: [34, 35, 36, 37, 38], &quot;9&quot;: [41, 43], &quot;13&quot;: [39], &quot;14&quot;: [42, 45], &quot;15&quot;: [31, 32, 33], &quot;null&quot;: [22, 23, 24, 25, 26, 19, 20, 21, 40, 44]}, &quot;layers_to_questions&quot;: {&quot;null&quot;: [31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 45], &quot;11&quot;: [19], &quot;14&quot;: [40, 44], &quot;6&quot;: [22, 23, 24, 25, 26, 20, 21]}}
</div>

<!-- which county stats to show when basemaps and layers are turned on and off -->
<div id="table_json">
    {&quot;layers_to_county_stats&quot;: {}, &quot;basemaps_to_county_stats&quot;: {&quot;9&quot;: [8, 9, 3, 6, 10, 2, 5], &quot;13&quot;: [8, 9, 3, 6, 10, 2, 5], &quot;1&quot;: [1, 7, 4]}}
</div>

<div class="careermaptabs">

<div id="1-map">


<table id = "outer_table">
<tr>
<td id ="left_hand_td">

        <div class="description">
        
        </div>

        <h5>
        Choose base map:
        </h5>
        <select id="1-basemap-control" class="base_map_select" onchange="update_basemap (this)">
        
        <option basemap_id="14" value="https://ccnmtl-pass-static-prod.s3.amazonaws.com/uploads/images/careermapblock/base_maps/2011/09/30/basemap_background.jpg">Geography</option>
        
        <option basemap_id="9" value="https://ccnmtl-pass-static-prod.s3.amazonaws.com/uploads/images/careermapblock/base_maps/2016/01/20/population_1.png">Population</option>
        
        <option basemap_id="13" value="https://ccnmtl-pass-static-prod.s3.amazonaws.com/uploads/images/careermapblock/base_maps/2011/11/02/under_5_1.png">Population under 5</option>
        
        <option basemap_id="1" value="https://ccnmtl-pass-static-prod.s3.amazonaws.com/uploads/images/careermapblock/base_maps/2011/11/02/below_poverty_level_percent_1.png">% Population Below Poverty Level</option>
        
        <option basemap_id="15" value="https://ccnmtl-pass-static-prod.s3.amazonaws.com/uploads/images/careermapblock/base_maps/2011/11/02/mean_percentage_caries_in_children_under_5_2.png">% Children with Caries Experience</option>
        
        </select><br /><br />
        <h5>
        Show layers:
        </h5>
        <table class="layer-controls">
            
            <tr id="show_layer_14" >
                <td onclick="toggle_layer (14)" >
                    <div class="layer-box" style="background-color:#fff;"> </div>
                </td>
                <td onclick="toggle_layer (14)" >
                    Zip codes
                </td>
            </tr>
            
            <tr id="show_layer_11" >
                <td onclick="toggle_layer (11)" >
                    <div class="layer-box" style="background-color:#fff;"> </div>
                </td>
                <td onclick="toggle_layer (11)" >
                    Major roads and public transportation lines
                </td>
            </tr>
            
            <tr id="show_layer_15" >
                <td onclick="toggle_layer (15)" >
                    <div class="layer-box" style="background-color:#FFFFFF;"> </div>
                </td>
                <td onclick="toggle_layer (15)" >
                    GP (accepting Medicaid)
                </td>
            </tr>
            
            <tr id="show_layer_16" >
                <td onclick="toggle_layer (16)" >
                    <div class="layer-box" style="background-color:#ffffff;"> </div>
                </td>
                <td onclick="toggle_layer (16)" >
                    GP (not accepting Medicaid)
                </td>
            </tr>
            
            <tr id="show_layer_17" >
                <td onclick="toggle_layer (17)" >
                    <div class="layer-box" style="background-color:#ffffff;"> </div>
                </td>
                <td onclick="toggle_layer (17)" >
                    PD (accepting Medicaid)
                </td>
            </tr>
            
            <tr id="show_layer_18" >
                <td onclick="toggle_layer (18)" >
                    <div class="layer-box" style="background-color:#ffffff;"> </div>
                </td>
                <td onclick="toggle_layer (18)" >
                    PD (not accepting Medicaid)
                </td>
            </tr>
            
            <tr id="show_layer_6" >
                <td onclick="toggle_layer (6)" >
                    <div class="layer-box" style="background-color:#fff;"> </div>
                </td>
                <td onclick="toggle_layer (6)" >
                    Dental safety net
                </td>
            </tr>
            
        </table>


        <div class="did_you_know_container">
            
                
                <div class ="did_you_know_title" id="question_22">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>Dental clinicians working full-time at an approved National Health Service Corps site can receive up to $60,000 toward repayment of their health professions student loans for 2 years of service. They can also can apply for additional support for extended service – as much as $170,000 for 5 years. This program also includes a &quot;half-time&quot; option.</p>
                    </div>
                    <span class = "question_layer">
                        6
                    </span>
                     <span class = "question_basemap">
                        None
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_23">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>The average net income of full-time solo private practice dental providers rose 117% between 1990 and 2004, and in 2006, independent general dentists earned $202,930 on average.</p>
                    </div>
                    <span class = "question_layer">
                        6
                    </span>
                     <span class = "question_basemap">
                        None
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_24">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>The average debt of all dental school graduates in 2007 was $158,810, up significantly from $145,465 in 2006. This includes lifestyle debt.</p>
                    </div>
                    <span class = "question_layer">
                        6
                    </span>
                     <span class = "question_basemap">
                        None
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_25">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>There are currently 61 schools of dentistry in 36 States and Puerto Rico? This means there are 15 states without a dental school.</p>
                    </div>
                    <span class = "question_layer">
                        6
                    </span>
                     <span class = "question_basemap">
                        None
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_26">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>In 2001, the number of vacant budgeted dental faculty positions nationwide was approaching 400. Over 73% of the vacancies were in the clinical sciences. Almost 34% were due to retirements; 33% were faculty moves to other schools; and a little over 18% were moves to enter private practice. Almost 3% of identified faculty separations were from deaths.</p>
                    </div>
                    <span class = "question_layer">
                        6
                    </span>
                     <span class = "question_basemap">
                        None
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_31">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>Children who live under the federal poverty line are less than half as likely to have a dental visit in a given year than children from higher income families.</p>
                    </div>
                    <span class = "question_layer">
                        None
                    </span>
                     <span class = "question_basemap">
                        15
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_32">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>According to the CDC, almost a third of 2-5 year olds in the US were found to have least 1 untreated cavity.</p>
                    </div>
                    <span class = "question_layer">
                        None
                    </span>
                     <span class = "question_basemap">
                        15
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_33">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>More than 80% of early childhood caries can be found in less than 25% of the population - namely children from poor, minority, and immigrant families.</p>
                    </div>
                    <span class = "question_layer">
                        None
                    </span>
                     <span class = "question_basemap">
                        15
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_34">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>The unemployment rate in Beacon County is analogous to  6.7% in Montgomery County, MD.</p>
                    </div>
                    <span class = "question_layer">
                        None
                    </span>
                     <span class = "question_basemap">
                        1
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_35">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>Over 40% of all children are served by public insurance (Medicaid or Children&#39;s Health Insurance Plan).</p>
                    </div>
                    <span class = "question_layer">
                        None
                    </span>
                     <span class = "question_basemap">
                        1
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_36">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>For 2011, the Federal Poverty Level for a family of four is an annual income of about $22,350.</p>
                    </div>
                    <span class = "question_layer">
                        None
                    </span>
                     <span class = "question_basemap">
                        1
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_37">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>Children who live under the federal poverty line are more than twice as likely to have caries, an untreated dental filling, or a toothache. They are also half as likely to have a dental visit in a given year.</p>
                    </div>
                    <span class = "question_layer">
                        None
                    </span>
                     <span class = "question_basemap">
                        1
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_19">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>A family living in rural upstate New York may have to travel as far as 110 miles in order to receive pediatric restorative dental services. To do this, each dental appointment would require at least a half day for travel and cost approximately $40.00 in gas alone (US average).</p>
                    </div>
                    <span class = "question_layer">
                        11
                    </span>
                     <span class = "question_basemap">
                        None
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_20">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>There are approximately 1,000 school-based health centers functioning in 42 states, predominately in urban areas (60%). However, only a little over half of these centers screen children for dental problems, and few offer dental care and sealant programs.</p>
                    </div>
                    <span class = "question_layer">
                        6
                    </span>
                     <span class = "question_basemap">
                        None
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_38">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>The median household income in Beacon County is analogous to $93,774 in Montgomery County, MD.</p>
                    </div>
                    <span class = "question_layer">
                        None
                    </span>
                     <span class = "question_basemap">
                        1
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_21">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>&quot;Skimming&quot; is a term used to describe a mobile dental program that travels from town to town, billing large amounts of dental exams, prophys, and fluoride treatments without adequately addressing the restorative or follow-up care needs of a community. In some areas, skimming has prompted health officials to disallow the practice of mobile dentistry from any dentist not affiliated with a non-profit organization or community health center.</p>
                    </div>
                    <span class = "question_layer">
                        6
                    </span>
                     <span class = "question_basemap">
                        None
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_39">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>Preschool-aged children comprise the one demographic group in the US that is increasing in caries prevalence? 40% of preschoolers have experienced dental caries by the time they enter kindergarten.</p>
                    </div>
                    <span class = "question_layer">
                        None
                    </span>
                     <span class = "question_basemap">
                        13
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_40">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>The median household income in Annenburg County is analogous to $55,900 in Coahoma County, MS.</p>
                    </div>
                    <span class = "question_layer">
                        14
                    </span>
                     <span class = "question_basemap">
                        None
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_41">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>The median household income in Duane County is analogous to $125,300 in Wayne County, MI.</p>
                    </div>
                    <span class = "question_layer">
                        None
                    </span>
                     <span class = "question_basemap">
                        9
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_42">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>The median household income in Springdale County is analogous to $41,055 in Yakima county, WA.</p>
                    </div>
                    <span class = "question_layer">
                        None
                    </span>
                     <span class = "question_basemap">
                        14
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_43">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>The unemployment rate in Annenburg County is analogous to 39.4% in Coahoma County, MS.</p>
                    </div>
                    <span class = "question_layer">
                        None
                    </span>
                     <span class = "question_basemap">
                        9
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_44">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>The unemployment rate in Duane County is analogous to 24.2% in Wayne County, MI.</p>
                    </div>
                    <span class = "question_layer">
                        14
                    </span>
                     <span class = "question_basemap">
                        None
                    </span>
                </div>
                
                <div class ="did_you_know_title" id="question_45">
                <div class='didyouknow'>
                    <h5>Did you know?</h5>
                    </div>
                    <div class='maintext'>
                        <p>The unemployment rate in Springdale County is analogous to 22% in Yakima county, WA.</p>
                    </div>
                    <span class = "question_layer">
                        None
                    </span>
                     <span class = "question_basemap">
                        14
                    </span>
                </div>
                
            
        </div>

</td> <!-- end left_hand_td -->

<td id = "right_hand_td">
            <div id="1-base" class="careermap-base">
                <img class="basemap_image"  id="1-basemap" alt="career map" src="https://ccnmtl-pass-static-prod.s3.amazonaws.com/uploads/images/careermapblock/base_maps/2011/09/30/basemap_background.jpg"/>
                <!-- These are the layers that you can show and hide and show up on the list of layers. -->
                
                <img id="layer-14" src="https://ccnmtl-pass-static-prod.s3.amazonaws.com/uploads/images/careermapblock/layers/2011/11/02/zip_codes_6.png"
                     class="careermap-layer show_and_hideable" />
                
                <img id="layer-11" src="https://ccnmtl-pass-static-prod.s3.amazonaws.com/uploads/images/careermapblock/layers/2011/11/02/transport_3.png"
                     class="careermap-layer show_and_hideable" />
                
                <img id="layer-15" src="https://ccnmtl-pass-static-prod.s3.amazonaws.com/uploads/images/careermapblock/layers/2011/11/29/num_gp_medicaid.png"
                     class="careermap-layer show_and_hideable" />
                
                <img id="layer-16" src="https://ccnmtl-pass-static-prod.s3.amazonaws.com/uploads/images/careermapblock/layers/2011/11/29/num_gp_no_medicaid.png"
                     class="careermap-layer show_and_hideable" />
                
                <img id="layer-17" src="https://ccnmtl-pass-static-prod.s3.amazonaws.com/uploads/images/careermapblock/layers/2011/11/29/num_pd_medicaid.png"
                     class="careermap-layer show_and_hideable" />
                
                <img id="layer-18" src="https://ccnmtl-pass-static-prod.s3.amazonaws.com/uploads/images/careermapblock/layers/2011/11/29/num_pd_no_medicaid.png"
                     class="careermap-layer show_and_hideable" />
                
                <img id="layer-6" src="https://ccnmtl-pass-static-prod.s3.amazonaws.com/uploads/images/careermapblock/layers/2011/11/02/safety_net_1.png"
                     class="careermap-layer show_and_hideable" />
                

                <!-- These are the layers that never get hidden: the borders of the counties and the general labels. -->
                <img src="/media/img/county_borders.png" class="careermap-layer permanent" />
                <img src="/media/img/general_labels.png" class="careermap-layer permanent" />


            </div> <!-- end careermap-base -->

            <div id = "legend_container">
                <a id = "show_legend_button" class ="legend_show_hide_button">Show Legend</a>
                <a id = "hide_legend_button" class ="legend_show_hide_button">Hide Legend</a>
            </div>

            <table id = "county_and_stats">
            <tr>
            <td>
                <table id="county_table">
                    <tr>
                        <th class="blank"></th>
                    </tr>
                    
                        <tr>
                            <th>Beacon</th>
                        </tr>
                    
                        <tr>
                            <th>Annenburg</th>
                        </tr>
                    
                        <tr>
                            <th>Duane</th>
                        </tr>
                    
                        <tr>
                            <th>Springdale</th>
                        </tr>
                    
                </table>
            </td>
            <td>
                <div class ="table_container">
                            
                            <table id="stats_table">
                            <tr>
                                
                                    <th>Population <span class="stat_id_container">(#<span class ="stat_id">8</span>)</span></th>
                                
                                    <th>Population under 5 <span class="stat_id_container">(#<span class ="stat_id">9</span>)</span></th>
                                
                                    <th>Below poverty level <span class="stat_id_container">(#<span class ="stat_id">1</span>)</span></th>
                                
                                    <th>Median household income in dollars <span class="stat_id_container">(#<span class ="stat_id">7</span>)</span></th>
                                
                                    <th>High school graduates <span class="stat_id_container">(#<span class ="stat_id">4</span>)</span></th>
                                
                                    <th>Foreign born <span class="stat_id_container">(#<span class ="stat_id">3</span>)</span></th>
                                
                                    <th>Language other than English <span class="stat_id_container">(#<span class ="stat_id">6</span>)</span></th>
                                
                                    <th>White <span class="stat_id_container">(#<span class ="stat_id">10</span>)</span></th>
                                
                                    <th>Black <span class="stat_id_container">(#<span class ="stat_id">2</span>)</span></th>
                                
                                    <th>Hispanic or Latino <span class="stat_id_container">(#<span class ="stat_id">5</span>)</span></th>
                                
                            </tr>
                            <tr id = "layer_row">
                                <th>Layers</th>
                                
                                    <td>
                                        <span class ="list_of_layers">
                                            
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_layers">
                                            
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_layers">
                                            
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_layers">
                                            
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_layers">
                                            
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_layers">
                                            
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_layers">
                                            
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_layers">
                                            
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_layers">
                                            
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_layers">
                                            
                                        </span>
                                    </td>
                                
                            </tr>
                            <tr id = "basemap_row">
                                <th>Basemaps</th>
                                
                                    <td>
                                        <span class ="list_of_basemaps">
                                        
                                            <span>Population (#9)</span>
                                        
                                            <span>Population under 5 (#13)</span>
                                        
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_basemaps">
                                        
                                            <span>Population (#9)</span>
                                        
                                            <span>Population under 5 (#13)</span>
                                        
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_basemaps">
                                        
                                            <span>% Population Below Poverty Level (#1)</span>
                                        
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_basemaps">
                                        
                                            <span>% Population Below Poverty Level (#1)</span>
                                        
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_basemaps">
                                        
                                            <span>% Population Below Poverty Level (#1)</span>
                                        
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_basemaps">
                                        
                                            <span>Population (#9)</span>
                                        
                                            <span>Population under 5 (#13)</span>
                                        
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_basemaps">
                                        
                                            <span>Population (#9)</span>
                                        
                                            <span>Population under 5 (#13)</span>
                                        
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_basemaps">
                                        
                                            <span>Population (#9)</span>
                                        
                                            <span>Population under 5 (#13)</span>
                                        
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_basemaps">
                                        
                                            <span>Population (#9)</span>
                                        
                                            <span>Population under 5 (#13)</span>
                                        
                                        </span>
                                    </td>
                                
                                    <td>
                                        <span class ="list_of_basemaps">
                                        
                                            <span>Population (#9)</span>
                                        
                                            <span>Population under 5 (#13)</span>
                                        
                                        </span>
                                    </td>
                                
                            </tr>

                            
                            <tr>
                                
                                        <td>971,777</td>
                                
                                        <td>7.2%</td>
                                
                                        <td>6.7%</td>
                                
                                        <td>93,774</td>
                                
                                        <td>91.1%</td>
                                
                                        <td>29.6%</td>
                                
                                        <td>35.8%</td>
                                
                                        <td>57.5%</td>
                                
                                        <td>17.2%</td>
                                
                                        <td>17.0%</td>
                                
                            </tr>
                            
                            <tr>
                                
                                        <td>26,151</td>
                                
                                        <td>8.8%</td>
                                
                                        <td>39.4%</td>
                                
                                        <td>55,900</td>
                                
                                        <td>74.1%</td>
                                
                                        <td>0.6%</td>
                                
                                        <td>1.6%</td>
                                
                                        <td>22.9%</td>
                                
                                        <td>75.5%</td>
                                
                                        <td>1.1%</td>
                                
                            </tr>
                            
                            <tr>
                                
                                        <td>1,820,584</td>
                                
                                        <td>6.6%</td>
                                
                                        <td>24.2%</td>
                                
                                        <td>125,300</td>
                                
                                        <td>82.0%</td>
                                
                                        <td>7.9%</td>
                                
                                        <td>12.5%</td>
                                
                                        <td>52.3%</td>
                                
                                        <td>40.5%</td>
                                
                                        <td>5.2%</td>
                                
                            </tr>
                            
                            <tr>
                                
                                        <td>243,231</td>
                                
                                        <td>9.4%</td>
                                
                                        <td>22.0%</td>
                                
                                        <td>41,055</td>
                                
                                        <td>71.1%</td>
                                
                                        <td>17.2%</td>
                                
                                        <td>36.1%</td>
                                
                                        <td>63.7%</td>
                                
                                        <td>1.0%</td>
                                
                                        <td>45.0%</td>
                                
                            </tr>
                            
                            </tr>
                            </table>
                            
                 </div> <!-- end table_container -->           

            </td>
            </tr>
            </table> <!-- end county_and_stats -->

</td> <!-- end right_hand_td -->
</tr>
</table> <!-- end outer_table -->
</div> <!-- end 1-map -->
</div><!-- end careermaptabs -->
</div> <!-- end careermapblock -->


<h3>Advise Sam</h3>


<div class='question'><p>You just got access to a map of North Oralington. You can see this map by clicking the orange button to the right, "Show Map."</p></div>




  


<div class="cases"><div class="casetitle">Question 1:</div><div class="casecontent"><div class="casequestion"><div class="casequestion-text clearfix"><div class="q-mod5">Q:</div><div class="question-text"><p>Sam would like to work with young children. Which zip code should he consider?</p></div></div><ol class="caseanswercontainer" type="A"><li class=""><label><input name="pageblock-126-question87"
                               value="10033" type="radio"><span class="caseanswerlabel">10033</span></label></li><li class=""><label><input name="pageblock-126-question87"
                               value="10041" type="radio"><span class="caseanswerlabel">10041</span></label></li><li class=""><label><input name="pageblock-126-question87"
                               value="10002" type="radio"><span class="caseanswerlabel">10002</span></label></li><li class=""><label><input name="pageblock-126-question87"
                               value="10037" type="radio"><span class="caseanswerlabel">10037</span></label></li></ol></div></div></div>

  


<div class="cases"><div class="casetitle">Question 2:</div><div class="casecontent"><div class="casequestion"><div class="casequestion-text clearfix"><div class="q-mod5">Q:</div><div class="question-text"><p>Sam and his wife have one car. They would like to have access to public transportation. What county should he consider?</p></div></div><ol class="caseanswercontainer" type="A"><li class=""><label><input name="pageblock-126-question88"
                               value="Springdale County" type="radio"><span class="caseanswerlabel">Springdale County</span></label></li><li class=""><label><input name="pageblock-126-question88"
                               value="Duane County" type="radio"><span class="caseanswerlabel">Duane County</span></label></li><li class=""><label><input name="pageblock-126-question88"
                               value="Beacon County" type="radio"><span class="caseanswerlabel">Beacon County</span></label></li><li class=""><label><input name="pageblock-126-question88"
                               value="Annenburg County" type="radio"><span class="caseanswerlabel">Annenburg County</span></label></li></ol></div></div></div>

  


<div class="cases"><div class="casetitle">Question 3:</div><div class="casecontent"><div class="casequestion"><div class="casequestion-text clearfix"><div class="q-mod5">Q:</div><div class="question-text"><p>Sam is fluent in Spanish. Based on this fact alone, which county should he consider?</p></div></div><ol class="caseanswercontainer" type="A"><li class=""><label><input name="pageblock-126-question90"
                               value="Springdale County" type="radio"><span class="caseanswerlabel">Springdale County</span></label></li><li class=""><label><input name="pageblock-126-question90"
                               value="Duane County" type="radio"><span class="caseanswerlabel">Duane County</span></label></li><li class=""><label><input name="pageblock-126-question90"
                               value="Beacon County" type="radio"><span class="caseanswerlabel">Beacon County</span></label></li><li class=""><label><input name="pageblock-126-question90"
                               value="Annenburg County" type="radio"><span class="caseanswerlabel">Annenburg County</span></label></li></ol></div></div></div>

  


<div class="cases"><div class="casetitle">Question 4:</div><div class="casecontent"><div class="casequestion"><div class="casequestion-text clearfix"><div class="q-mod5">Q:</div><div class="question-text"><p>Now spend some time to further explore North Oralington using the interactive map. Based on Sam's summary and your investigation, where would you recommend Sam to set up or join a practice? Please use the map to select a zip code.</p></div></div><select name="pageblock-126-question91"><option value="-----"
    >-----</option><option value="10001"
    >10001</option><option value="10002"
    >10002</option><option value="10003"
    >10003</option><option value="10004"
    >10004</option><option value="10005"
    >10005</option><option value="10006"
    >10006</option><option value="10007"
    >10007</option><option value="10008"
    >10008</option><option value="10009"
    >10009</option><option value="10010"
    >10010</option><option value="10011"
    >10011</option><option value="10012"
    >10012</option><option value="10013"
    >10013</option><option value="10014"
    >10014</option><option value="10015"
    >10015</option><option value="10016"
    >10016</option><option value="10017"
    >10017</option><option value="10018"
    >10018</option><option value="10019"
    >10019</option><option value="10020"
    >10020</option><option value="10021"
    >10021</option><option value="10022"
    >10022</option><option value="10023"
    >10023</option><option value="10024"
    >10024</option><option value="10025"
    >10025</option><option value="10026"
    >10026</option><option value="10027"
    >10027</option><option value="10028"
    >10028</option><option value="10029"
    >10029</option><option value="10030"
    >10030</option><option value="10031"
    >10031</option><option value="10032"
    >10032</option><option value="10033"
    >10033</option><option value="10034"
    >10034</option><option value="10035"
    >10035</option><option value="10036"
    >10036</option><option value="10037"
    >10037</option><option value="10038"
    >10038</option><option value="10039"
    >10039</option><option value="10040"
    >10040</option><option value="10041"
    >10041</option><option value="10042"
    >10042</option><option value="10043"
    >10043</option><option value="10044"
    >10044</option><option value="10045"
    >10045</option><option value="10046"
    >10046</option><option value="10047"
    >10047</option><option value="10048"
    >10048</option><option value="10049"
    >10049</option></select></div></div></div>

  


<div class="cases"><div class="casetitle">Question 5:</div><div class="casecontent"><div class="casequestion"><div class="casequestion-text clearfix"><div class="q-mod5">Q:</div><div class="question-text"><p>Please explain the reasoning for your choice.</p></div></div><textarea rows="10" name="pageblock-126-question92" class="form-control"></textarea></div></div></div>





