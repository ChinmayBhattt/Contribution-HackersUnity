import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WorkWithHU = () => {
    const [formData, setFormData] = useState({
        // Application Stage
        stage: 'Hackathon Community Manager',
        permalink: '',

        // Contact Information
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+91',
        phone: '',

        // Event Basics
        hackathonName: '',
        websiteUrl: '',
        submissionUrl: '',
        chatUrl: '',
        teamEmail: '',
        startDate: '',
        endDate: '',
        attendeeEstimate: '',

        // Event Location
        locationZone: 'APAC', // Default for India Primary Zone

        // Event Type
        eventType: 'Physical Hackathon',

        // Host Institution
        institutionName: '',
        currency: 'INR',
        estimatedCost: '',

        // Eligibility
        eligibility: {
            college: false,
            highSchool: false,
            middleSchool: false,
            nonTraditional: false,
            nonStudent: false
        },

        // Diversity Focus
        diversity: {
            highSchoolOnly: false,
            womenOnly: false,
            genderEquality: false,
            underrepresentedGenders: false,
            hbcu: false,
            pocFocused: false,
            other: false,
            exclusiveToGroup: false
        },

        // Hackathon Description
        description: '',

        // Event Venue Details
        venueName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        postalCode: '',
        country: 'India',

        // Event Timing
        organizerArrival: '',
        hackerArrival: '',
        closingCeremony: '',

        // Additional Benefits Preference
        benefitsPreference: 'Both (Priority Hardware)',

        // TechTogether Mini-Event Interest
        techTogetherInterest: 'Yes – Send Extra Swag',

        // Submission Platform
        submissionPlatform: 'Devfolio',

        // Final Questions
        questionsForHU: '',
        anythingElse: ''
    });

    const [formStep, setFormStep] = useState(1);
    const totalSteps = 6;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.includes('.')) {
            const [category, field] = name.split('.');
            setFormData({
                ...formData,
                [category]: {
                    ...formData[category],
                    [field]: type === 'checkbox' ? checked : value
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value
            });
        }
    };

    const nextStep = () => {
        if (formStep < totalSteps) {
            setFormStep(formStep + 1);
            window.scrollTo(0, 0);
        }
    };

    const prevStep = () => {
        if (formStep > 1) {
            setFormStep(formStep - 1);
            window.scrollTo(0, 0);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            window.scrollTo(0, 0);
        }, 1500);
    };

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -20 }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-primary-950 pt-24 pb-12 transition-colors duration-300">
                <div className="container-custom max-w-3xl">
                    <motion.div
                        initial="initial" animate="in" variants={pageVariants}
                        className="bg-white dark:bg-primary-900 rounded-xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-800"
                    >
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Application Submitted!</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                            Thank you for applying to host a Member Event with Hacker's Unity. We have received your application for <strong>{formData.hackathonName || 'your event'}</strong> and a confirmation email has been sent to {formData.email}.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 mb-8">
                            Our team will review your application and get back to you soon. Please check your Organizer Dashboard for updates.
                        </p>
                        <button onClick={() => window.location.href = '/'} className="btn btn-primary px-8 py-3">
                            Return to Home
                        </button>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-primary-950 pt-24 pb-16 transition-colors duration-300">

            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-secondary/10 to-accent/5 dark:from-secondary/5 dark:to-accent/5 -z-10"></div>

            <div className="container-custom max-w-4xl">

                {/* Header Section */}
                <motion.div
                    initial="initial" animate="in" variants={pageVariants}
                    className="text-center mb-10"
                >
                    <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Member Event Application</h1>
                    <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium mb-6">
                        Join the Hacker's Unity Hackathon Season
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Thank you for your interest in working with Hacker's Unity. This application process helps our team understand your event, goals, and needs better. Please fill out each section with as much detail as possible.
                    </p>
                </motion.div>

                {/* Guidelines Alert Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-blue-50 dark:bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg shadow-sm mb-10"
                >
                    <div className="flex items-start">
                        <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Member Event Guidelines</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3 font-medium">Your event must:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                                <li>Be open to attendees outside your local institution</li>
                                <li>Have a website translated into English (announcements must also be in English)</li>
                                <li>Serve at least 80% students (middle school, high school, university, bootcamps, homeschool, online institution, or graduates within the past year)</li>
                                <li>Be completely free to attend (no entry, accommodation, or food fees)</li>
                                <li>Be accessible regardless of financial situation</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between mb-2">
                        <span className="text-xs font-semibold inline-block text-secondary">
                            Step {formStep} of {totalSteps}
                        </span>
                        <span className="text-xs font-semibold inline-block text-gray-500 dark:text-gray-400">
                            {Math.round((formStep / totalSteps) * 100)}% Complete
                        </span>
                    </div>
                    <div className="flex w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                            className="flex flex-col justify-center bg-gradient-to-r from-secondary to-accent text-white shadow-none whitespace-nowrap transition-all duration-500 ease-in-out"
                            style={{ width: `${(formStep / totalSteps) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Application Form */}
                <motion.div
                    key={formStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white dark:bg-primary-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 p-6 md:p-8"
                >
                    <form onSubmit={handleSubmit}>

                        {/* STEP 1: Basics & Contact */}
                        {formStep === 1 && (
                            <div className="space-y-8 animate-fade-in">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">Application Stage & Contact</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Application Stage <span className="text-red-500">*</span></label>
                                            <select
                                                name="stage" value={formData.stage} onChange={handleInputChange} required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                            >
                                                <option value="Hackathon Community Manager">Hackathon Community Manager</option>
                                                <option value="Event Organizer">Event Organizer</option>
                                                <option value="Institution Rep">Institution Rep</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Organizer's Permalink</label>
                                            <input
                                                type="url" name="permalink" value={formData.permalink} onChange={handleInputChange} placeholder="https://..."
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Lead Organizer Details</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name <span className="text-red-500">*</span></label>
                                            <input
                                                type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name <span className="text-red-500">*</span></label>
                                            <input
                                                type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address <span className="text-red-500">*</span></label>
                                            <input
                                                type="email" name="email" value={formData.email} onChange={handleInputChange} required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number <span className="text-red-500">*</span></label>
                                            <div className="flex">
                                                <select
                                                    name="countryCode" value={formData.countryCode} onChange={handleInputChange}
                                                    className="w-[120px] px-2 py-3 mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block dark:bg-primary-950 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                                                >
                                                    <option value="+91">🇮🇳 India (+91)</option>
                                                    <option value="+1">🇺🇸 United States (+1)</option>
                                                    <option value="+44">🇬🇧 United Kingdom (+44)</option>
                                                    <option value="+61">🇦🇺 Australia (+61)</option>
                                                    <option value="+1">🇨🇦 Canada (+1)</option>
                                                    <option value="+49">🇩🇪 Germany (+49)</option>
                                                    <option value="+33">🇫🇷 France (+33)</option>
                                                    <option value="+81">🇯🇵 Japan (+81)</option>
                                                    <option value="+86">🇨🇳 China (+86)</option>
                                                    <option value="+971">🇦🇪 UAE (+971)</option>
                                                    <option value="+65">🇸🇬 Singapore (+65)</option>
                                                    <option value="+92">🇵🇰 Pakistan (+92)</option>
                                                    <option value="+880">🇧🇩 Bangladesh (+880)</option>
                                                </select>
                                                <input
                                                    type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="9876543210"
                                                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 2: Event Details */}
                        {formStep === 2 && (
                            <div className="space-y-8 animate-fade-in">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">Event Basics</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Hackathon Name <span className="text-red-500">*</span></label>
                                            <input
                                                type="text" name="hackathonName" value={formData.hackathonName} onChange={handleInputChange} required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Hackathon Website URL</label>
                                            <input
                                                type="url" name="websiteUrl" value={formData.websiteUrl} onChange={handleInputChange} placeholder="https://"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Chat Platform Invite URL (Discord/WhatsApp)</label>
                                            <input
                                                type="url" name="chatUrl" value={formData.chatUrl} onChange={handleInputChange} placeholder="https://"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div className="space-y-2 md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Team Email Address <span className="text-red-500">*</span></label>
                                            <input
                                                type="email" name="teamEmail" value={formData.teamEmail} onChange={handleInputChange} required placeholder="hello@yourhackathon.com"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Start Date <span className="text-red-500">*</span></label>
                                            <input
                                                type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">End Date <span className="text-red-500">*</span></label>
                                            <input
                                                type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div className="space-y-2 md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Attendee Estimate <span className="text-red-500">*</span></label>
                                            <input
                                                type="number" name="attendeeEstimate" value={formData.attendeeEstimate} onChange={handleInputChange} required min="10"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div className="space-y-2 md:col-span-2 pt-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Hackathon Description <span className="text-red-500">*</span></label>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Provide a 2–3 sentence description of your hackathon. This may be used on the Hacker's Unity website, partner websites, and social media.</p>
                                            <textarea
                                                name="description" value={formData.description} onChange={handleInputChange} required rows="4"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 3: Demographics & Type */}
                        {formStep === 3 && (
                            <div className="space-y-8 animate-fade-in">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">Event Type & Logistics</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Event Zone */}
                                        <div className="space-y-3">
                                            <label className="block text-base font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">Event Location Zone</label>
                                            <div className="space-y-2 pt-2">
                                                {['India (Primary Hub)', 'APAC Region', 'North America (NA)', 'European Union (EU)', 'Other'].map(zone => (
                                                    <label key={zone} className="flex items-center cursor-pointer p-2 rounded-md hover:bg-gray-50 dark:hover:bg-primary-950 transition-colors">
                                                        <input
                                                            type="radio" name="locationZone" value={zone}
                                                            checked={formData.locationZone === zone || (formData.locationZone === 'APAC' && zone === 'APAC Region')} onChange={handleInputChange}
                                                            className="w-4 h-4 text-secondary focus:ring-secondary border-gray-300 dark:border-gray-600 bg-white dark:bg-primary-900"
                                                        />
                                                        <span className="ml-3 text-gray-700 dark:text-gray-300">
                                                            {zone} {zone === 'India (Primary Hub)' && <span className="text-xs text-secondary ml-2 font-medium">(Recommended)</span>}
                                                        </span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Event Type */}
                                        <div className="space-y-3">
                                            <label className="block text-base font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">Event Format</label>
                                            <div className="space-y-2 pt-2">
                                                {['Physical Hackathon', 'Digital Hackathon', 'Hybrid Hackathon'].map(type => (
                                                    <label key={type} className="flex items-center cursor-pointer p-2 rounded-md hover:bg-gray-50 dark:hover:bg-primary-950 transition-colors">
                                                        <input
                                                            type="radio" name="eventType" value={type}
                                                            checked={formData.eventType === type} onChange={handleInputChange}
                                                            className="w-4 h-4 text-secondary focus:ring-secondary border-gray-300 dark:border-gray-600 bg-white dark:bg-primary-900"
                                                        />
                                                        <span className="ml-3 text-gray-700 dark:text-gray-300">{type}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 space-y-6">
                                        <label className="block text-base font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">Host Institution & Budget</label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                            <div className="space-y-2 md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">School / College / University Name <span className="text-red-500">*</span></label>
                                                <input
                                                    type="text" name="institutionName" value={formData.institutionName} onChange={handleInputChange} required
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Local Currency</label>
                                                <select
                                                    name="currency" value={formData.currency} onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                                >
                                                    <option value="INR">INR (₹)</option>
                                                    <option value="USD">USD ($)</option>
                                                    <option value="EUR">EUR (€)</option>
                                                    <option value="GBP">GBP (£)</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Estimated Event Cost <span className="text-red-500">*</span></label>
                                                <input
                                                    type="number" name="estimatedCost" value={formData.estimatedCost} onChange={handleInputChange} required min="0" placeholder="e.g. 50000"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 4: Audience & Diversity */}
                        {formStep === 4 && (
                            <div className="space-y-8 animate-fade-in">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">Audience & Eligibility</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Eligibility */}
                                        <div className="space-y-3">
                                            <label className="block text-base font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">Target Eligibility</label>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Check all that apply.</p>
                                            <div className="space-y-3 pt-2">
                                                {[
                                                    { id: 'college', label: 'College / University Students' },
                                                    { id: 'highSchool', label: 'High School Students' },
                                                    { id: 'middleSchool', label: 'Middle School Students' },
                                                    { id: 'nonTraditional', label: 'Non-Traditional Students' },
                                                    { id: 'nonStudent', label: 'Non-Students / Professionals' }
                                                ].map(item => (
                                                    <label key={item.id} className="flex items-center cursor-pointer group">
                                                        <div className="relative flex items-center justify-center w-5 h-5 mr-3">
                                                            <input
                                                                type="checkbox" name={`eligibility.${item.id}`}
                                                                checked={formData.eligibility[item.id]} onChange={handleInputChange}
                                                                className="peer appearance-none w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-md checked:bg-secondary checked:border-secondary focus:ring-2 focus:ring-secondary/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-primary-900 transition-all cursor-pointer bg-white dark:bg-primary-900"
                                                            />
                                                            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                                        </div>
                                                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-secondary dark:group-hover:text-secondary transition-colors">{item.label}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Diversity Focus */}
                                        <div className="space-y-3">
                                            <label className="block text-base font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">Diversity Focus</label>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Check any specific diversity initiatives.</p>
                                            <div className="space-y-3 pt-2">
                                                {[
                                                    { id: 'highSchoolOnly', label: 'High School Students Only' },
                                                    { id: 'womenOnly', label: 'Women Only' },
                                                    { id: 'genderEquality', label: 'Gender Equality (50/50)' },
                                                    { id: 'underrepresentedGenders', label: 'Underrepresented Genders in Tech' },
                                                    { id: 'hbcu', label: 'Historically Black College/University' },
                                                    { id: 'pocFocused', label: 'People of Color Focused' },
                                                    { id: 'other', label: 'Other Diversity Focus' }
                                                ].map(item => (
                                                    <label key={item.id} className="flex items-center cursor-pointer group">
                                                        <div className="relative flex items-center justify-center w-5 h-5 mr-3">
                                                            <input
                                                                type="checkbox" name={`diversity.${item.id}`}
                                                                checked={formData.diversity[item.id]} onChange={handleInputChange}
                                                                className="peer appearance-none w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-md checked:bg-accent checked:border-accent focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-primary-900 transition-all cursor-pointer bg-white dark:bg-primary-900"
                                                            />
                                                            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                                        </div>
                                                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-accent dark:group-hover:text-accent transition-colors">{item.label}</span>
                                                    </label>
                                                ))}

                                                <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800/50">
                                                    <label className="flex items-center cursor-pointer group w-fit">
                                                        <div className="relative">
                                                            <input
                                                                type="checkbox" name="diversity.exclusiveToGroup"
                                                                checked={formData.diversity.exclusiveToGroup} onChange={handleInputChange}
                                                                className="sr-only"
                                                            />
                                                            <div className={`block w-14 h-8 rounded-full transition-colors duration-300 ease-in-out ${formData.diversity.exclusiveToGroup ? 'bg-accent' : 'bg-gray-300 dark:bg-gray-700'}`}></div>
                                                            <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out flex items-center justify-center ${formData.diversity.exclusiveToGroup ? 'transform translate-x-6' : ''}`}>
                                                                {formData.diversity.exclusiveToGroup ? (
                                                                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                                                ) : (
                                                                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <span className="ml-4 text-gray-700 dark:text-gray-300 font-medium group-hover:text-accent transition-colors">Exclusive to Underrepresented Group?</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 5: Venue & Timing */}
                        {formStep === 5 && (
                            <div className="space-y-8 animate-fade-in">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">Venue & Logistics</h3>

                                    {formData.eventType !== 'Digital Hackathon' && (
                                        <div className="space-y-6 mb-8">
                                            <label className="block text-base font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">Event Venue Details</label>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                                <div className="space-y-2 md:col-span-2">
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Venue Name</label>
                                                    <input
                                                        type="text" name="venueName" value={formData.venueName} onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                                    />
                                                </div>
                                                <div className="space-y-2 md:col-span-2">
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address Line 1</label>
                                                    <input
                                                        type="text" name="address1" value={formData.address1} onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                                    />
                                                </div>
                                                <div className="space-y-2 md:col-span-2">
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address Line 2 <span className="text-gray-400 font-normal">(Optional)</span></label>
                                                    <input
                                                        type="text" name="address2" value={formData.address2} onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">City</label>
                                                    <input
                                                        type="text" name="city" value={formData.city} onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">State / Region</label>
                                                    <input
                                                        type="text" name="state" value={formData.state} onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Postal Code</label>
                                                    <input
                                                        type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Country</label>
                                                    <input
                                                        type="text" name="country" value={formData.country} onChange={handleInputChange} readOnly={formData.locationZone === 'APAC'}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-primary-950/50 text-gray-600 dark:text-gray-400 focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-6">
                                        <label className="block text-base font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">Event Timing</label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Organizer Arrival Time</label>
                                                <input
                                                    type="datetime-local" name="organizerArrival" value={formData.organizerArrival} onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Hacker Arrival Time</label>
                                                <input
                                                    type="datetime-local" name="hackerArrival" value={formData.hackerArrival} onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                                />
                                            </div>
                                            <div className="space-y-2 md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Closing Ceremony End Time</label>
                                                <input
                                                    type="datetime-local" name="closingCeremony" value={formData.closingCeremony} onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 md:w-1/2"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 6: Platforms & Extras */}
                        {formStep === 6 && (
                            <div className="space-y-8 animate-fade-in">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">Platforms & Extra Details</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                        {/* Submission Platform */}
                                        <div className="space-y-3">
                                            <label className="block text-base font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">Primary Submission Platform</label>
                                            <div className="space-y-2 pt-2">
                                                {['Devpost', 'HackerEarth', 'Devfolio', 'DoraHacks', 'Other'].map(type => (
                                                    <label key={type} className="flex items-center cursor-pointer p-2 rounded-md hover:bg-gray-50 dark:hover:bg-primary-950 transition-colors">
                                                        <input
                                                            type="radio" name="submissionPlatform" value={type}
                                                            checked={formData.submissionPlatform === type} onChange={handleInputChange}
                                                            className="w-4 h-4 text-secondary focus:ring-secondary border-gray-300 dark:border-gray-600 bg-white dark:bg-primary-900"
                                                        />
                                                        <span className="ml-3 text-gray-700 dark:text-gray-300">{type}</span>
                                                    </label>
                                                ))}
                                            </div>
                                            <div className="space-y-2 pt-2">
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Submission Platform URL</label>
                                                <input
                                                    type="url" name="submissionUrl" value={formData.submissionUrl} onChange={handleInputChange} placeholder="https://"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                                />
                                            </div>
                                        </div>

                                        {/* Extras */}
                                        <div className="space-y-8">
                                            <div className="space-y-3">
                                                <label className="block text-base font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">TechTogether Mini-Event Interest</label>
                                                <p className="text-xs text-secondary mb-2">Optional 30-min meetup for underrepresented genders. Supported by HU Coach.</p>
                                                <div className="space-y-2 pt-1">
                                                    {['Yes – Send Extra Swag', 'Undecided', 'No Thank You'].map(type => (
                                                        <label key={type} className="flex items-center cursor-pointer p-2 rounded-md hover:bg-gray-50 dark:hover:bg-primary-950 transition-colors">
                                                            <input
                                                                type="radio" name="techTogetherInterest" value={type}
                                                                checked={formData.techTogetherInterest === type} onChange={handleInputChange}
                                                                className="w-4 h-4 text-accent focus:ring-accent border-gray-300 dark:border-gray-600 bg-white dark:bg-primary-900"
                                                            />
                                                            <span className="ml-3 text-gray-700 dark:text-gray-300">{type}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <label className="block text-base font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">Additional Benefits</label>
                                                <div className="space-y-2 pt-1">
                                                    {['Hardware Lab', 'Photographer', 'Both (Priority Hardware)', 'Both (Priority Photographer)', 'No Thank You'].map(type => (
                                                        <label key={type} className="flex items-center cursor-pointer p-2 rounded-md hover:bg-gray-50 dark:hover:bg-primary-950 transition-colors">
                                                            <input
                                                                type="radio" name="benefitsPreference" value={type}
                                                                checked={formData.benefitsPreference === type} onChange={handleInputChange}
                                                                className="w-4 h-4 text-secondary focus:ring-secondary border-gray-300 dark:border-gray-600 bg-white dark:bg-primary-900"
                                                            />
                                                            <span className="ml-3 text-gray-700 dark:text-gray-300">{type}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Final Textareas */}
                                    <div className="space-y-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Questions for Hacker's Unity</label>
                                            <textarea
                                                name="questionsForHU" value={formData.questionsForHU} onChange={handleInputChange} rows="3"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                                placeholder="Any doubts or specific requests?"
                                            ></textarea>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Anything else we should know about your hackathon?</label>
                                            <textarea
                                                name="anythingElse" value={formData.anythingElse} onChange={handleInputChange} rows="3"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-primary-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                                                placeholder="Vision, goals, previous iterations..."
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
                            {formStep > 1 ? (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="px-6 py-2.5 rounded-lg font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-primary-800 hover:bg-gray-200 dark:hover:bg-primary-700 transition-colors"
                                >
                                    Back
                                </button>
                            ) : (
                                <div></div> // Empty div to keep 'Next' button on the right
                            )}

                            {formStep < totalSteps ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="btn btn-secondary px-8 py-2.5 flex items-center shadow-lg shadow-secondary/20"
                                >
                                    Continue <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`btn btn-primary px-8 py-2.5 flex items-center shadow-lg shadow-accent/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Submit Application <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>

        </div>
    );
};

export default WorkWithHU;
