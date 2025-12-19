var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#b0b4b8",
    state_hover_color: "#000000",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    PH00: {
      name: "National Capital Region",
      description: "Total deaths: 336 | Male: 264 | Female: 72"
    },
    PH01: {
      name: "Region I",
      description: "Total deaths: 139 | Male: 114 | Female: 25"
    },
    PH02: {
      name: "Region II",
      description: "Total deaths: 144 | Male: 116 | Female: 28"
    },
    PH03: {
      name: "Region III",
      description: "Total deaths: 324 | Male: 267 | Female: 57"
    },
    PH05: {
      name: "Region V",
      description: "Total deaths: 172 | Male: 144 | Female: 28"
    },
    PH06: {
      name: "Region VI",
      description: "Total deaths: 259 | Male: 201 | Female: 58"
    },
    PH07: {
      name: "Region VII",
      description: "Total deaths: 354 | Male: 279 | Female: 75"
    },
    PH08: {
      name: "Region VIII",
      description: "Total deaths: 118 | Male: 96 | Female: 22"
    },
    PH09: {
      name: "Region IX",
      description: "Total deaths: 87 | Male: 64 | Female: 23"
    },
    PH10: {
      name: "Region X",
      description: "Total deaths: 220 | Male: 176 | Female: 44"
    },
    PH11: {
      name: "Region XI",
      description: "Total deaths: 185 | Male: 149 | Female: 36"
    },
    PH12: {
      name: "Region XII",
      description: "Total deaths: 134 | Male: 110 | Female: 24"
    },
    PH13: {
      name: "Region XIII",
      description: "Total deaths: 83 | Male: 68 | Female: 15"
    },
    PH14: {
      name: "BARMM",
      description: "Total deaths: 11 | Male: 11 | Female: 0"
    },
    PH15: {
      name: "Cordillera Administrative Region",
      description: "Total deaths: 81 | Male: 67 | Female: 14"
    },
    PH40: {
      name: "Calabarzon",
      description: "Total deaths: 370 | Male: 307 | Female: 63"
    },
    PH41: {
      name: "Mimaropa",
      description: "Total deaths: 109 | Male: 92 | Female: 17"
    }
  },
  locations: {},
  labels: {
    PH00: {
      name: "National Capital Region",
      parent_id: "PH00"
    },
    PH01: {
      name: "Ilocos",
      parent_id: "PH01"
    },
    PH02: {
      name: "Cagayan Valley",
      parent_id: "PH02"
    },
    PH03: {
      name: "Central Luzon",
      parent_id: "PH03"
    },
    PH05: {
      name: "Bicol",
      parent_id: "PH05"
    },
    PH06: {
      name: "Western Visayas",
      parent_id: "PH06"
    },
    PH07: {
      name: "Central Visayas",
      parent_id: "PH07"
    },
    PH08: {
      name: "Eastern Visayas",
      parent_id: "PH08"
    },
    PH09: {
      name: "Zamboanga Peninsula",
      parent_id: "PH09"
    },
    PH10: {
      name: "Northern Mindanao",
      parent_id: "PH10"
    },
    PH11: {
      name: "Davao",
      parent_id: "PH11"
    },
    PH12: {
      name: "Soccsksargen",
      parent_id: "PH12"
    },
    PH13: {
      name: "Caraga",
      parent_id: "PH13"
    },
    PH14: {
      name: "Autonomous Region in Muslim Mindanao",
      parent_id: "PH14"
    },
    PH15: {
      name: "Cordillera Administrative Region",
      parent_id: "PH15"
    },
    PH40: {
      name: "Calabarzon",
      parent_id: "PH40"
    },
    PH41: {
      name: "Mimaropa",
      parent_id: "PH41"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};

(function () {
  const states = simplemaps_countrymap_mapdata.state_specific;

  // Extract numeric total deaths from description text
  const ranked = Object.entries(states).map(([id, s]) => {
    const match = s.description.match(/Total deaths:\s*(\d+)/);
    const total = match ? parseInt(match[1]) : 0;

    return { id, total };
  }).sort((a, b) => b.total - a.total);

  // Get top 3 regions
  const top3 = ranked.slice(0, 3);

  top3.forEach((item, index) => {
    const region = states[item.id];

    // Strong visual priority
    region.color = "#7b0000";          // Dark red
    region.hover_color = "#ff4d4d";

    // Enhance popup text
    region.description += ` | 🔴 TOP ${index + 1} PRIORITY REGION`;
  });
})();
