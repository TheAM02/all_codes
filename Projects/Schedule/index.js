const schedule = {

    monday: {
		college: {
			day: 'Practical',
			time: {
				start: '8:30',
				end: '11:10'
			},
			total: '2:40'
		},
		practicalCentre: true,
		home: false
	},

    tuesday: {
		college: false,
		practicalCentre: false,
		home: {
        	day: 'Arsalan',
        	time: {
            	start: '15',
            	end: '22'
        	},
        	break: '00:30',
    		total: '7'
		}
    },

    wednesday: {
		college: {
			day: 'Standard',
			time: {
				start: '11:50',
				end: '12:30'
			},
			total: '00:40'
		},
		practicalCentre: true,
		home: {
        	day: 'Mueed',
        	time: {
            	start: '21',
            	end: '23:30'
        	},
        	break: false,
        	total: '2:30'
		}
    },

    thursday: {
		college: {
			day: 'Standard',
			time: {
				start: '11:50',
				end: '12:30'
			},
			total: '00:40'
		},
		practicalCentre: false,
		home: {
        	day: 'Mueed',
        	time: {
            	start: '18',
            	end: '23'
        	},
        	break: false,
        	total: '5'
		}
    },

    friday: {
		college: {
			day: 'Standard',
			time: {
				start: '9:10',
				end: '9:50'
			},
			total: '00:40'
		},
		practicalCentre: false,
		home: {
        	day: 'Arsalan',
        	time: {
            	start: '15',
            	end: '22'
        	},
        	break: '00:30',
        	total: '7'
		}
    },

    saturday: {
		college: false,
		practicalCentre: false,
		home: false
	},

    sunday: {
		college: false,
		practicalCentre: false,
		home: {
        	day: 'Ahad',
        	time: {
            	start: '5',
            	end: '22'
        	},
        	break: false,
        	total: '5'
		}
    },

    list(property) {
        if (property) console.log(this[property])
        else console.log(this)
    },

	parseTime(prop) {
		console.log(prop)
		return prop.toString().replace(':', '.')
	}

}

schedule.list('friday')
console.log(schedule.parseTime(schedule.friday.college.time.start));