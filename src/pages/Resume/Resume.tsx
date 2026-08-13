import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download, Mail, Phone, MapPin } from 'lucide-react';

import { CVPDFDocument } from '../../components/Resume/CVPDFDocument';
import { projects } from '../../data/projects';
import { profileData } from '../../data/profile';
import { aboutData } from '../../data/about';
import { journeyData } from '../../data/experiences';

import {
  skillsData,
  skillsCategoryList,
} from '../../data/skills';

/* =========================================================
   Social SVG Icons
   Using custom SVG instead of Lucide icons
========================================================= */

const GitHubIcon: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0.5C5.65 0.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.69-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
    />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V9H3.56v11.45ZM22.22 0H1.78C.8 0 .5.78.5 1.76v20.48c0 .98.3 1.76 1.28 1.76h20.44c.98 0 1.78-.78 1.78-1.76V1.76C24 .78 23.2 0 22.22 0Z" />
  </svg>
);

/* =========================================================
   Resume Component
========================================================= */

const Resume: React.FC = () => {
  /* =======================================================
     Separate Experience and Education
  ======================================================== */

  const experiences = journeyData.filter(
    (item) => item.type === 'experience'
  );

  const educations = journeyData.filter(
    (item) => item.type === 'education'
  );

  /* =======================================================
     Group Skills by Category
     Existing skillsData structure is unchanged
  ======================================================== */

  const groupedSkills = skillsCategoryList.map((category) => ({
    category,
    skills: skillsData.filter(
      (skill) => skill.category === category
    ),
  }));

  return (
    <div
      className="
        min-h-screen
        bg-gray-50
        dark:bg-gray-900
        py-12
        px-4
        sm:px-6
        lg:px-8
        transition-colors
        duration-300
      "
    >

      {/* =====================================================
          Action Bar
          PDFDownloadLink replaces window.print()
      ====================================================== */}

      <div
        className="
          max-w-4xl mx-auto mb-6
          flex justify-between items-center
          relative z-50
        "
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Resume
        </h1>

        <PDFDownloadLink
          document={
            <CVPDFDocument
              profileData={profileData}
              aboutData={aboutData}
              journeyData={journeyData}
              projectsData={projects}
            />
          }
          fileName={`Resume_${aboutData.personalInfo.name.replace(
            /\s+/g,
            '_'
          )}.pdf`}
          className="
            flex items-center gap-2
            px-5 py-2.5
            bg-blue-600
            hover:bg-blue-700
            text-white
            font-medium
            rounded-lg
            transition-all
            shadow-sm
            cursor-pointer
            active:scale-95
          "
        >
          {({ loading }) => (
            <>
              <Download size={18} />

              <span>
                {loading
                  ? 'Generating Smart CV...'
                  : 'Download PDF'}
              </span>
            </>
          )}
        </PDFDownloadLink>
      </div>

      {/* =====================================================
          Resume Web Preview
      ====================================================== */}

      <div
        className="
          max-w-4xl mx-auto
          bg-white
          text-gray-900
          shadow-xl
          p-8
          sm:p-12
          md:p-16
          rounded-xl
        "
      >

        {/* ===================================================
            Header
        ==================================================== */}

        <header className="border-b-2 border-gray-200 pb-8 mb-8">

          <div
            className="
              flex
              flex-col
              md:flex-row
              justify-between
              items-start
              md:items-center
              gap-6
            "
          >

            {/* Identity */}

            <div>

              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                {aboutData.personalInfo.name}
              </h1>

              <h2 className="text-xl font-semibold text-blue-600">
                {aboutData.personalInfo.role}
              </h2>

              <p className="text-gray-600 mt-2 max-w-lg">
                {aboutData.personalInfo.bio}
              </p>

            </div>

            {/* =================================================
                Contact Information
            ================================================== */}

            <div className="flex flex-col gap-2 text-sm text-gray-600">

              {profileData.email && (
                <div className="flex items-center gap-2">
                  <Mail
                    size={16}
                    className="text-gray-400 shrink-0"
                  />

                  <span>
                    {profileData.email}
                  </span>
                </div>
              )}

              {profileData.phone && (
                <div className="flex items-center gap-2">
                  <Phone
                    size={16}
                    className="text-gray-400 shrink-0"
                  />

                  <span>
                    {profileData.phone}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <MapPin
                  size={16}
                  className="text-gray-400 shrink-0"
                />

                <span>
                  {aboutData.personalInfo.location}
                </span>
              </div>

            </div>

          </div>

          {/* =================================================
              Social Links
              Custom SVG Icons
          ================================================== */}

          <div className="flex items-center gap-5 mt-6">

            {profileData.socials?.github && (
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-gray-600
                  hover:text-gray-900
                  transition-colors
                "
              >
                <GitHubIcon className="w-4 h-4" />

                <span>
                  GitHub
                </span>
              </a>
            )}

            {profileData.socials?.linkedin && (
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-gray-600
                  hover:text-blue-600
                  transition-colors
                "
              >
                <LinkedInIcon className="w-4 h-4" />

                <span>
                  LinkedIn
                </span>
              </a>
            )}

          </div>

        </header>

        {/* =====================================================
            Content Grid
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-10
          "
        >

          {/* ===================================================
              MAIN COLUMN
              Experience + Education
          ==================================================== */}

          <div className="md:col-span-2 space-y-10">

            {/* =================================================
                Professional Experience
            ================================================== */}

            <section>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-gray-900
                  border-b
                  pb-2
                  mb-4
                  uppercase
                  tracking-wider
                  text-sm
                "
              >
                Professional Experience
              </h3>

              <div className="space-y-6">

                {experiences.length > 0 ? (

                  experiences.map((exp) => (

                    <div
                      key={exp.id}
                      className="relative"
                    >

                      <div
                        className="
                          flex
                          justify-between
                          items-baseline
                          mb-1
                          gap-4
                        "
                      >

                        <h4 className="text-lg font-bold text-gray-900">
                          {exp.title}
                        </h4>

                        <span
                          className="
                            text-sm
                            font-medium
                            text-gray-500
                            whitespace-nowrap
                          "
                        >
                          {exp.startDate} - {exp.endDate}
                        </span>

                      </div>

                      <div className="text-blue-600 font-medium mb-2">
                        {exp.organization}
                      </div>

                      <p className="text-sm text-gray-700 leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.achievements &&
                        exp.achievements.length > 0 && (

                          <ul
                            className="
                              list-disc
                              list-outside
                              ml-4
                              mt-2
                              text-sm
                              text-gray-700
                              space-y-1
                              marker:text-gray-400
                            "
                          >

                            {exp.achievements.map(
                              (achievement, index) => (

                                <li key={index}>
                                  {achievement}
                                </li>

                              )
                            )}

                          </ul>

                        )}

                    </div>

                  ))

                ) : (

                  <p className="text-sm text-gray-500">
                    No professional experience added yet.
                  </p>

                )}

              </div>

            </section>

            {/* =================================================
                Education
            ================================================== */}

            <section>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-gray-900
                  border-b
                  pb-2
                  mb-4
                  uppercase
                  tracking-wider
                  text-sm
                "
              >
                Education
              </h3>

              <div className="space-y-6">

                {educations.length > 0 ? (

                  educations.map((edu) => (

                    <div key={edu.id}>

                      <div
                        className="
                          flex
                          justify-between
                          items-baseline
                          mb-1
                          gap-4
                        "
                      >

                        <h4 className="text-lg font-bold text-gray-900">
                          {edu.title}
                        </h4>

                        <span
                          className="
                            text-sm
                            font-medium
                            text-gray-500
                            whitespace-nowrap
                          "
                        >
                          {edu.startDate} - {edu.endDate}
                        </span>

                      </div>

                      <div className="text-blue-600 font-medium">
                        {edu.organization}
                      </div>

                      <p className="text-sm text-gray-700 mt-1">
                        {edu.description}
                      </p>

                    </div>

                  ))

                ) : (

                  <p className="text-sm text-gray-500">
                    No education information added yet.
                  </p>

                )}

              </div>

            </section>

          </div>

          {/* ===================================================
              SIDE COLUMN
              Skills + Methodologies
          ==================================================== */}

          <div className="md:col-span-1 space-y-10">

            {/* =================================================
                Skills
            ================================================== */}

            <section>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-gray-900
                  border-b
                  pb-2
                  mb-4
                  uppercase
                  tracking-wider
                  text-sm
                "
              >
                Skills & Tech
              </h3>

              <div className="space-y-6">

                {groupedSkills.map(
                  (skillCategory) => (

                    <div
                      key={skillCategory.category}
                    >

                      <h4
                        className="
                          text-base
                          font-semibold
                          text-gray-900
                          mb-2
                        "
                      >
                        {skillCategory.category}
                      </h4>

                      <div className="flex flex-wrap gap-2">

                        {skillCategory.skills.map(
                          (skill) => (

                            <span
                              key={skill.id}
                              className="
                                px-2.5
                                py-1
                                bg-gray-100
                                text-gray-700
                                text-xs
                                font-medium
                                rounded
                                border
                                border-gray-200
                              "
                            >
                              {skill.name}
                            </span>

                          )
                        )}

                      </div>

                    </div>

                  )
                )}

              </div>

            </section>

            {/* =================================================
                Methodologies
            ================================================== */}

            <section>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-gray-900
                  border-b
                  pb-2
                  mb-4
                  uppercase
                  tracking-wider
                  text-sm
                "
              >
                Methodologies
              </h3>

              <ul className="space-y-3">

                {aboutData.workflow.map(
                  (flow, index) => (

                    <li
                      key={index}
                      className="text-sm"
                    >

                      <span className="font-bold text-gray-900 block">
                        {flow.step}
                      </span>

                      <span className="text-gray-600">
                        {flow.text}
                      </span>

                    </li>

                  )
                )}

              </ul>

            </section>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Resume;