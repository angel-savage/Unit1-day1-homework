// Part I: Set the Scene
// Create a new directory on your Desktop called galaxy_far_far_away and enter it via terminal
cd ~
mkdir galaxy_far_far_away

// Create a directory called death_star, and make the following files inside of it:
// darth_vader.txt
// princess_leia.txt
// storm_trooper.txt
cd ~
cd galaxy_far_far_away
mkdir death_stir
cd death_stir
touch darth_vader.tx princess_leia.txt stormtrooper

// In galaxy_far_far_away, make a directory named tatooine and create the following files in it:
// luke.txt
// ben_kenobi.txt
cd ~
cd galaxy_far_far_away
mkdir tatooine
touch luke.txt ben_kenobi.txt


// Inside of tatooine make a directory called millenium_falcon, and in it create:
// han_solo.txt
// chewbaca.txt
cd ~
cd galaxy_far_far_away/tatooine
mkdir millenium_falcon
cd millenium_falcon
touch han_solo.txt chewbaca.txt


// Part II: mv - rename
// Rename ben_kenobi.txt to obi_wan.txt.
mv ben_kenobi.txt obi_wan.txt


// Part III: cp - copy
// Copy storm_trooper.txt from death_star to tatooine
cd ~
cd galaxy_far_far_away/death_star
cp ./death_star/storm_trooper.txt ./tatooine/storm_tropper.txt


// Part IV: mv - move
// Move luke.txt and obi_wan.txt to the millenium_falcon
cd ~
cd galaxy_far_far_away/tatooine
mv ./tatooine/luke.txt ../millenium_falcon/luke.txt
mv ./tatooine/obi_wan.txt ../millenium_falcon/obi_wan.txt

// Move millenium_falcon out of tatooine and into galaxy_far_far_away
cd ~
cd galaxy_far_far_away/tatooine
mv ./tatooine/millenium_falcon ..galaxy_far_far_away/millenium_falcon

// Move millenium_falcon into death_star
cd ~
cd galaxy_far_far_away/
mv ./galaxy_far_far_away/millenium_falcon death_star/millenium_falcon

// Move princess_leia.txt into the millenium_falcon
cd ~
cd galaxy_far_far_away/death_star
mv ./death_star/princess_leia.txt ../death_star/millenium_falcon


// Part V: rm - remove
// Delete obi_wan.txt
cd ~
cd galaxy_far_far_away/tatooine
rm obi_wan.txt


// Part VI: all together
// In galaxy_far_far_away, make a directory called yavin_4
cd ~
cd galaxy_far_far_away
mkdir yavin_4

// Move the millenium_falcon out of the death_star and into yavin_4
cd ~
cd galaxy_far_far_away/death_star 
mv ./death_star/millenium_falcon ./galaxy_far_far_away/yavin_4

// Make a directory in yavin_4 called x_wing
cd ~
cd galaxy_far_far_away/yavin_4
mkdir x_wing

// Move princess_leia.txt to yavin_4 and luke.txt to x_wing
cd ~
cd galaxy_far_far_away/yavin_4/millenium_falcon
mv ./millenium_falcon/princess_leia.txt  ../x_wing/princess_leia.txt 

// Move the millenium_falcon and x_wing out of yavin_4 and into galaxy_far_far_away
cd ~
cd galaxy_far_far_away/yavin_4
mv ./yavin_4/millenium_falcon ..galaxy_far_far_away/millenium_falcon
mv ./yavin_4/x_wing ..galaxy_far_far_away/x_wing

// In death_star, create directories for tie_fighter_1, tie_fighter_2 and tie_fighter_3
cd ~
cd galaxy_far_far_away/death_star
mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3

// Move darth_vader.txt into tie_fighter_1
cd ~
cd galaxy_far_far_away/death_star
mv. /death_star/darth_vader.txt ../tie_fighter_1/darth_vader.txt

// Make a copy of storm_trooper.txt in both tie_fighter_2 and tie_fighter_3
cd ~
cd galaxy_far_far_away/death_star
cp ./death_star/storm_trooper.txt ../tie_fighter_2/storm_trooper.txt 
cp ./death_star/storm_trooper.txt ../tie_fighter_3/storm_trooper.txt 

// Move all of the tie_fighters out of the death_star and into galaxy_far_far_away
cd ~
cd galaxy_far_far_away/death_star
mv ./death_star/tie_fighter_1 tie_fighter_2 tie_fighter_3 ..galaxy_far_far_away/tie_fighter_1 tie_fighter_2 tie_fighter_3 


// Part VII: rm -r - remove directories
// Remove tie_fighters 2 and 3.
cd ~
cd galaxy_far_far_away
rm -r tie_fighter_2 tie_fighter_3 

// Part VIII: The Final Act
// Touch a file in x_wing called the_force.txt
cd ~
cd galaxy_far_far_away/x_wing
touch the_force.txt

// Destroy the death_star and anyone inside of it.
cd ~
cd galaxy_far_far_away
rm death_star

// Return x_wing and the millenium_falcon to yavin_4
cd ~
cd galaxy_far_far_away
mv ./galaxy_far_far_away/x_wing millenium_falcon ../yavin_4/x_wing millenium_falcon 

// Celebrate!