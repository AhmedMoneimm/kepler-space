import pandas as pd

# Load the CSV file (replace 'your_file.csv' with the path to your CSV)
file_path = 'cleaned_exoplanets_features.csv'
data = pd.read_csv(file_path)

# Function to generate a text description for each row
def generate_description(row):
    description = (
        f"Exoplanet {row['pl_name']} (planet letter {row['pl_letter']}) of type {row['pl_type']} orbits the host star {row['hostname']}. "
        f"It is part of a system with {row['sy_snum']} stars and {row['sy_pnum']} planets. "
        f"It was discovered in {row['disc_year']} using the {row['discoverymethod']} method. "
        f"The discovery took place at the {row['disc_facility']} facility from the {row['disc_locale']} using the {row['disc_telescope']} telescope and the {row['disc_instrument']} instrument."
    )

    # Add right ascension and declination
    if pd.notna(row['ra']) and pd.notna(row['dec']):
        description += f" The right ascension is {row['ra']} and the declination is {row['dec']}."

    # Add galactic latitude and longitude
    if pd.notna(row['glat']) and pd.notna(row['glon']):
        description += f" The galactic latitude is {row['glat']} and the galactic longitude is {row['glon']}."
    
    # Add ecliptic latitude and longitude
    if pd.notna(row['elat']) and pd.notna(row['elon']):
        description += f" The ecliptic latitude is {row['elat']} and the ecliptic longitude is {row['elon']}."

    # Add orbital period
    if pd.notna(row['pl_orbper']):
        description += f" The orbital period of the planet is {row['pl_orbper']} days."
    
    # Add planet radius (in Earth and Jupiter radii)
    if pd.notna(row['pl_rade']):
        description += f" The planet radius is {row['pl_rade']} Earth radii."
    if pd.notna(row['pl_radj']):
        description += f" The planet radius is {row['pl_radj']} Jupiter radii."
    
    # Add planet mass (in Earth and Jupiter masses)
    if pd.notna(row['pl_bmasse']):
        description += f" The planet mass is {row['pl_bmasse']} Earth masses."
    if pd.notna(row['pl_bmassj']):
        description += f" The planet mass is {row['pl_bmassj']} Jupiter masses."
    
    # Add mass determination method
    if pd.notna(row['pl_bmassprov']):
        description += f" The planet's mass was determined using the method '{row['pl_bmassprov']}.'"
    
    # Add planet density
    if pd.notna(row['pl_dens']):
        description += f" The planet density is {row['pl_dens']} g/cm³."
    
    # Add star details: spectral type, temperature, radius, mass, luminosity, age, gravity, and density
    if pd.notna(row['st_spectype']):
        description += f" The host star has a spectral type of {row['st_spectype']}."
    if pd.notna(row['st_teff']):
        description += f" The star's effective temperature is {row['st_teff']} K."
    if pd.notna(row['st_rad']):
        description += f" The star's radius is {row['st_rad']} solar radii."
    if pd.notna(row['st_mass']):
        description += f" The star's mass is {row['st_mass']} solar masses."
    if pd.notna(row['st_lum']):
        description += f" The star's luminosity is {row['st_lum']} times that of the Sun."
    if pd.notna(row['st_age']):
        description += f" The estimated age of the star is {row['st_age']} billion years."
    if pd.notna(row['st_logg']):
        description += f" The star's surface gravity is {row['st_logg']} cm/s²."
    if pd.notna(row['st_dens']):
        description += f" The star's density is {row['st_dens']} g/cm³."
    
    # Add star's rotation period and rotational velocity
    if pd.notna(row['st_rotp']):
        description += f" The star's rotation period is {row['st_rotp']} days."
    if pd.notna(row['st_vsin']):
        description += f" The star's rotational velocity is {row['st_vsin']} km/s."
    
    # Add distance to the planetary system
    if pd.notna(row['sy_dist']):
        description += f" The planetary system is approximately {row['sy_dist']} parsecs away."

    # Replace spaces with underscores in the planet name for the NASA link
    planet_name_for_link = row['pl_name'].replace(" ", "_")
    nasa_link = f"https://eyes.nasa.gov/apps/exo/#/planet/{planet_name_for_link}"
    
    # Closing the description with a link to the NASA 3D model
    description += f" You can view a 3D model of this planet on NASA's application here: {nasa_link}."
    
    return description

# Apply the function to each row and create a list of descriptions
descriptions = data.apply(generate_description, axis=1)

# Save the descriptions to a text file
output_file = 'exoplanet_descriptions.txt'
with open(output_file, 'w') as file:
    for desc in descriptions:
        file.write(desc + "\n\n")

print(f"Descriptions saved to {output_file}")