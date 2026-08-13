import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Svg,
  Path,
} from '@react-pdf/renderer';

import { projects } from '../../data/projects';
import { skillsData } from '../../data/skills';

// ============================================================
// TYPES
// ============================================================

interface CVPDFDocumentProps {
  profileData: any;
  aboutData: any;
  journeyData: any[];
  projectsData: typeof projects;
}

// ============================================================
// COLORS
// ============================================================

const COLORS = {
  primary: '#2563EB',
  primaryDark: '#1D4ED8',

  black: '#111827',
  dark: '#1F2937',

  text: '#374151',
  muted: '#6B7280',
  light: '#9CA3AF',

  border: '#E5E7EB',
  borderDark: '#D1D5DB',

  background: '#FFFFFF',
  softBackground: '#F8FAFC',

  tagBackground: '#EFF6FF',
};

// ============================================================
// STYLES
// ============================================================

const styles = StyleSheet.create({
  page: {
    paddingTop: 38,
    paddingBottom: 42,
    paddingHorizontal: 42,

    backgroundColor: COLORS.background,
    color: COLORS.text,

    fontFamily: 'Helvetica',
  },

  // ==========================================================
  // HEADER
  // ==========================================================

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingBottom: 18,
    marginBottom: 20,

    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.black,
  },

  headerLeft: {
    width: '63%',
    paddingRight: 15,
  },

  headerRight: {
    width: '37%',

    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  name: {
    fontSize: 27,
    fontWeight: 'bold',

    color: COLORS.black,

    letterSpacing: 0.3,

    marginBottom: 4,
  },

  role: {
    fontSize: 11.5,
    fontWeight: 'bold',

    color: COLORS.primary,

    marginBottom: 8,
  },

  summary: {
    fontSize: 9.2,
    lineHeight: 1.5,

    color: COLORS.text,
  },

  // ==========================================================
  // CONTACT
  // ==========================================================

  contactItem: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'flex-end',

    marginBottom: 5,

    maxWidth: '100%',
  },

  contactIcon: {
    width: 9,
    height: 9,

    marginRight: 5,
  },

  contactText: {
    fontSize: 8.5,
    color: COLORS.text,

    textAlign: 'right',
  },

  contactLink: {
    fontSize: 8.5,
    color: COLORS.text,

    textDecoration: 'none',

    textAlign: 'right',
  },

  updatedDate: {
    marginTop: 7,

    fontSize: 7.5,

    color: COLORS.light,
  },

  // ==========================================================
  // SECTION HEADER
  // ==========================================================

  section: {
    marginTop: 17,
    marginBottom: 11,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 11,
  },

  sectionNumber: {
    width: 21,
    height: 17,

    backgroundColor: COLORS.tagBackground,

    color: COLORS.primary,

    fontSize: 7.5,
    fontWeight: 'bold',

    textAlign: 'center',

    paddingTop: 5,

    marginRight: 7,
  },

  sectionTitle: {
    fontSize: 11.5,

    fontWeight: 'bold',

    color: COLORS.black,

    letterSpacing: 0.8,
  },

  sectionLine: {
    flex: 1,

    height: 1,

    backgroundColor: COLORS.border,

    marginLeft: 8,
  },

  // ==========================================================
  // EXPERIENCE / EDUCATION
  // ==========================================================

  item: {
    marginBottom: 14,

    paddingBottom: 10,

    borderBottomWidth: 0.6,
    borderBottomColor: COLORS.border,
  },

  itemLast: {
    marginBottom: 4,
    paddingBottom: 0,
    borderBottomWidth: 0,
  },

  itemHeader: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'flex-start',

    marginBottom: 3,
  },

  itemHeaderLeft: {
    width: '72%',
    paddingRight: 8,
  },

  itemHeaderRight: {
    width: '28%',

    alignItems: 'flex-end',
  },

  itemTitle: {
    fontSize: 10.3,

    fontWeight: 'bold',

    color: COLORS.black,
  },

  itemDate: {
    fontSize: 8,

    color: COLORS.muted,

    textAlign: 'right',
  },

  itemOrganization: {
    fontSize: 9.2,

    fontWeight: 'bold',

    color: COLORS.primary,

    marginBottom: 5,
  },

  description: {
    fontSize: 8.7,

    lineHeight: 1.45,

    color: COLORS.text,

    marginBottom: 5,
  },

  // ==========================================================
  // BULLETS
  // ==========================================================

  bullet: {
    flexDirection: 'row',

    alignItems: 'flex-start',

    marginBottom: 3,

    paddingRight: 5,
  },

  bulletSymbol: {
    width: 10,

    fontSize: 8.5,

    color: COLORS.primary,
  },

  bulletText: {
    flex: 1,

    fontSize: 8.5,

    lineHeight: 1.4,

    color: COLORS.text,
  },

  // ==========================================================
  // PROJECT
  // ==========================================================

  projectItem: {
    marginBottom: 15,

    paddingBottom: 11,

    borderBottomWidth: 0.6,
    borderBottomColor: COLORS.border,
  },

  projectHeader: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'flex-start',

    marginBottom: 3,
  },

  projectTitleContainer: {
    width: '75%',

    paddingRight: 8,
  },

  projectTitle: {
    fontSize: 10.5,

    fontWeight: 'bold',

    color: COLORS.black,
  },

  projectCategory: {
    fontSize: 7.5,

    color: COLORS.primary,

    marginTop: 2,
  },

  projectYear: {
    fontSize: 8,

    color: COLORS.muted,

    textAlign: 'right',
  },

  projectDescription: {
    fontSize: 8.6,

    lineHeight: 1.45,

    color: COLORS.text,

    marginBottom: 5,
  },

  techRow: {
    flexDirection: 'row',

    alignItems: 'flex-start',

    marginTop: 2,
  },

  techLabel: {
    fontSize: 8,

    fontWeight: 'bold',

    color: COLORS.black,

    marginRight: 4,
  },

  techText: {
    flex: 1,

    fontSize: 8,

    color: COLORS.muted,

    lineHeight: 1.4,
  },

  projectLink: {
    fontSize: 7.5,

    color: COLORS.primary,

    textDecoration: 'none',

    marginTop: 3,
  },

  // ==========================================================
  // SKILLS
  // ==========================================================

  skillsGrid: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',
  },

  skillCard: {
    width: '48.5%',

    padding: 9,

    marginBottom: 8,

    backgroundColor: COLORS.softBackground,

    borderWidth: 0.7,

    borderColor: COLORS.border,

    borderRadius: 4,
  },

  skillCategory: {
    fontSize: 9,

    fontWeight: 'bold',

    color: COLORS.black,

    marginBottom: 4,
  },

  skillDescription: {
    fontSize: 7.7,

    lineHeight: 1.35,

    color: COLORS.muted,

    marginBottom: 4,
  },

  skillRelated: {
    fontSize: 7.5,

    lineHeight: 1.3,

    color: COLORS.primary,
  },

  // ==========================================================
  // FOOTER
  // ==========================================================

  footer: {
    position: 'absolute',

    left: 42,
    right: 42,
    bottom: 18,

    paddingTop: 6,

    borderTopWidth: 0.6,
    borderTopColor: COLORS.border,

    flexDirection: 'row',

    justifyContent: 'space-between',
  },

  footerText: {
    fontSize: 7,

    color: COLORS.light,
  },
});

// ============================================================
// SVG ICONS
// ============================================================

const Icons = {
  Mail: () => (
    <Svg viewBox="0 0 24 24" style={styles.contactIcon}>
      <Path
        fill={COLORS.muted}
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
      />
    </Svg>
  ),

  Phone: () => (
    <Svg viewBox="0 0 24 24" style={styles.contactIcon}>
      <Path
        fill={COLORS.muted}
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      />
    </Svg>
  ),

  Location: () => (
    <Svg viewBox="0 0 24 24" style={styles.contactIcon}>
      <Path
        fill={COLORS.muted}
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      />
    </Svg>
  ),

  GitHub: () => (
    <Svg viewBox="0 0 24 24" style={styles.contactIcon}>
      <Path
        fill={COLORS.muted}
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </Svg>
  ),

  LinkedIn: () => (
    <Svg viewBox="0 0 24 24" style={styles.contactIcon}>
      <Path
        fill={COLORS.muted}
        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      />
    </Svg>
  ),
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

const formatDate = () => {
  return new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const safeText = (value: any, fallback = '') => {
  if (value === undefined || value === null) {
    return fallback;
  }

  return String(value);
};

// ============================================================
// MAIN CV DOCUMENT
// ============================================================

export const CVPDFDocument = ({
  profileData,
  aboutData,
  journeyData,
}: CVPDFDocumentProps) => {
  // ==========================================================
  // BASIC DATA
  // ==========================================================

  const personalInfo = aboutData?.personalInfo || {};

  const name = safeText(personalInfo.name, 'Your Name');

  const role = safeText(
    personalInfo.role,
    'Machine Learning Engineer'
  );

  const bio = safeText(personalInfo.bio);

  const location = safeText(
    personalInfo.location,
    profileData?.location
  );

  // ==========================================================
  // SUMMARY
  // ==========================================================

  const shortSummary =
    bio.length > 420
      ? `${bio.slice(0, 420)}...`
      : bio;

  // ==========================================================
  // EXPERIENCE
  // ==========================================================

  const experiences = (journeyData || [])
    .filter((item: any) => item?.type === 'experience');

  // ==========================================================
  // EDUCATION
  // ==========================================================

  const educations = (journeyData || [])
    .filter((item: any) => item?.type === 'education');

  // ==========================================================
  // PROJECTS
  //
  // IMPORTANT:
  // তোমার projects.ts-এর শেষের 4টা project নেওয়া হচ্ছে।
  //
  // id দিয়ে project খোঁজা হচ্ছে না।
  // পুরো project object সরাসরি ব্যবহার করা হচ্ছে।
  // ==========================================================

  const selectedProjects = Array.isArray(projects)
    ? projects
    : [];

  // ==========================================================
  // SKILLS
  //
  // তোমার skills.ts-এর শেষের 5টা skill নেওয়া হচ্ছে।
  // ==========================================================

  const selectedSkills = Array.isArray(skillsData)
    ? skillsData//.slice(-5)
    : [];

  return (
    <Document
      title={`${name} - Resume`}
      author={name}
      subject="Professional Resume"
      creator="Portfolio Resume Generator"
    >
      {/* ======================================================
          PAGE
      ====================================================== */}

      <Page
        size="A4"
        style={styles.page}
        wrap
      >
        {/* ====================================================
            HEADER
        ==================================================== */}

        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>
              {name}
            </Text>

            <Text style={styles.role}>
              {role}
            </Text>

            {shortSummary && (
              <Text style={styles.summary}>
                {shortSummary}
              </Text>
            )}
          </View>

          <View style={styles.headerRight}>
            {profileData?.email && (
              <View style={styles.contactItem}>
                <Icons.Mail />

                <Text style={styles.contactText}>
                  {profileData.email}
                </Text>
              </View>
            )}

            {profileData?.phone && (
              <View style={styles.contactItem}>
                <Icons.Phone />

                <Text style={styles.contactText}>
                  {profileData.phone}
                </Text>
              </View>
            )}

            {location && (
              <View style={styles.contactItem}>
                <Icons.Location />

                <Text style={styles.contactText}>
                  {location}
                </Text>
              </View>
            )}

            {profileData?.socials?.github && (
              <View style={styles.contactItem}>
                <Icons.GitHub />

                <Link
                  src={profileData.socials.github}
                  style={styles.contactLink}
                >
                  GitHub
                </Link>
              </View>
            )}

            {profileData?.socials?.linkedin && (
              <View style={styles.contactItem}>
                <Icons.LinkedIn />

                <Link
                  src={profileData.socials.linkedin}
                  style={styles.contactLink}
                >
                  LinkedIn
                </Link>
              </View>
            )}

            <Text style={styles.updatedDate}>
              CV Updated: {formatDate()}
            </Text>
          </View>
        </View>

        {/* ====================================================
            EXPERIENCE
        ==================================================== */}

        {experiences.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>
                01
              </Text>

              <Text style={styles.sectionTitle}>
                PROFESSIONAL EXPERIENCE
              </Text>

              <View style={styles.sectionLine} />
            </View>

            {experiences.map((experience: any, index: number) => {
              const achievements = Array.isArray(
                experience?.achievements
              )
                ? experience.achievements
                : [];

              return (
                <View
                  key={`experience-${index}`}
                  style={
                    index === experiences.length - 1
                      ? styles.itemLast
                      : styles.item
                  }
                  wrap={false}
                >
                  <View style={styles.itemHeader}>
                    <View style={styles.itemHeaderLeft}>
                      <Text style={styles.itemTitle}>
                        {safeText(
                          experience?.title,
                          'Experience'
                        )}
                      </Text>
                    </View>

                    <View style={styles.itemHeaderRight}>
                      <Text style={styles.itemDate}>
                        {safeText(
                          experience?.startDate
                        )}{' '}
                        -{' '}
                        {safeText(
                          experience?.endDate,
                          'Present'
                        )}
                      </Text>
                    </View>
                  </View>

                  {experience?.organization && (
                    <Text style={styles.itemOrganization}>
                      {experience.organization}
                    </Text>
                  )}

                  {experience?.description && (
                    <Text style={styles.description}>
                      {experience.description}
                    </Text>
                  )}

                  {achievements
                    .slice(0, 4)
                    .map(
                      (
                        achievement: string,
                        achievementIndex: number
                      ) => (
                        <View
                          key={`achievement-${achievementIndex}`}
                          style={styles.bullet}
                        >
                          <Text
                            style={styles.bulletSymbol}
                          >
                            •
                          </Text>

                          <Text
                            style={styles.bulletText}
                          >
                            {achievement}
                          </Text>
                        </View>
                      )
                    )}
                </View>
              );
            })}
          </View>
        )}

        {/* ====================================================
            PROJECTS
        ==================================================== */}

        {selectedProjects.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>
                02
              </Text>

              <Text style={styles.sectionTitle}>
                SELECTED PROJECTS
              </Text>

              <View style={styles.sectionLine} />
            </View>

            {selectedProjects.map(
              (project: any, index: number) => {
                /*
                 * IMPORTANT:
                 * এখানে project.id দিয়ে কোনো search করা হচ্ছে না।
                 *
                 * project-এর নিজের object থেকেই:
                 *
                 * project.title
                 * project.description
                 * project.category
                 * project.year
                 * project.tags
                 * project.github
                 * project.demo
                 *
                 * নেওয়া হচ্ছে।
                 */

                const projectTags = Array.isArray(
                  project?.tags
                )
                  ? project.tags
                  : [];

                return (
                  <View
                    key={`project-${project?.id || index}`}
                    style={styles.projectItem}
                    wrap={false}
                  >
                    <View style={styles.projectHeader}>
                      <View
                        style={styles.projectTitleContainer}
                      >
                        <Text style={styles.projectTitle}>
                          {safeText(
                            project?.title,
                            'Project'
                          )}
                        </Text>

                        {project?.category && (
                          <Text
                            style={styles.projectCategory}
                          >
                            {project.category}
                          </Text>
                        )}
                      </View>

                      {project?.year && (
                        <Text style={styles.projectYear}>
                          {project.year}
                        </Text>
                      )}
                    </View>

                    {project?.description && (
                      <Text
                        style={styles.projectDescription}
                      >
                        {project.description}
                      </Text>
                    )}

                    {projectTags.length > 0 && (
                      <View style={styles.techRow}>
                        <Text style={styles.techLabel}>
                          Tech:
                        </Text>

                        <Text style={styles.techText}>
                          {projectTags
                            .slice(0, 8)
                            .join(' · ')}
                        </Text>
                      </View>
                    )}

                    {project?.github && (
                      <Link
                        src={project.github}
                        style={styles.projectLink}
                      >
                        GitHub →
                      </Link>
                    )}
                  </View>
                );
              }
            )}
          </View>
        )}

        {/* ====================================================
            EDUCATION
        ==================================================== */}

        {educations.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>
                03
              </Text>

              <Text style={styles.sectionTitle}>
                EDUCATION
              </Text>

              <View style={styles.sectionLine} />
            </View>

            {educations.map(
              (education: any, index: number) => (
                <View
                  key={`education-${index}`}
                  style={
                    index === educations.length - 1
                      ? styles.itemLast
                      : styles.item
                  }
                  wrap={false}
                >
                  <View style={styles.itemHeader}>
                    <View style={styles.itemHeaderLeft}>
                      <Text style={styles.itemTitle}>
                        {safeText(
                          education?.title,
                          'Education'
                        )}
                      </Text>
                    </View>

                    <View style={styles.itemHeaderRight}>
                      <Text style={styles.itemDate}>
                        {safeText(
                          education?.startDate
                        )}{' '}
                        -{' '}
                        {safeText(
                          education?.endDate,
                          'Present'
                        )}
                      </Text>
                    </View>
                  </View>

                  {education?.organization && (
                    <Text style={styles.itemOrganization}>
                      {education.organization}
                    </Text>
                  )}

                  {education?.description && (
                    <Text style={styles.description}>
                      {education.description}
                    </Text>
                  )}
                </View>
              )
            )}
          </View>
        )}

        {/* ====================================================
            SKILLS
        ==================================================== */}

        {selectedSkills.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>
                04
              </Text>

              <Text style={styles.sectionTitle}>
                CORE SKILLS
              </Text>

              <View style={styles.sectionLine} />
            </View>

            <View style={styles.skillsGrid}>
              {selectedSkills.map(
                (skill: any, index: number) => {
                  const relatedSkills = Array.isArray(
                    skill?.relatedSkills
                  )
                    ? skill.relatedSkills
                    : [];

                  return (
                    <View
                      key={`skill-${skill?.id || index}`}
                      style={styles.skillCard}
                      wrap={false}
                    >
                      <Text style={styles.skillCategory}>
                        {safeText(
                          skill?.name,
                          'Skill'
                        )}
                      </Text>

                      {skill?.description && (
                        <Text
                          style={styles.skillDescription}
                        >
                          {skill.description}
                        </Text>
                      )}

                      {relatedSkills.length > 0 && (
                        <Text style={styles.skillRelated}>
                          Related:{' '}
                          {relatedSkills
                            .slice(0, 5)
                            .join(' · ')}
                        </Text>
                      )}
                    </View>
                  );
                }
              )}
            </View>
          </View>
        )}

        {/* ====================================================
            FOOTER
        ==================================================== */}

        <View
          style={styles.footer}
          fixed
        >
          <Text style={styles.footerText}>
            {name}
          </Text>

          <Text
            style={styles.footerText}
            render={({ pageNumber, totalPages }) =>
              `Page ${pageNumber} / ${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
};

export default CVPDFDocument;