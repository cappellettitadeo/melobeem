import "./style.less";

import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

import GoBack from "../../../../images/go-back.svg";

const Rules = () => {
  const date = new Date();

  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  firstDay = format(firstDay, "MM/dd/yyyy");
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  lastDay = format(lastDay, "MM/dd/yyyy");

  return (
    <div className="text-page">
      <Link to="/profile/setting" className="go-back">
        <GoBack />
      </Link>
      <div className="text-page__title headline-medium text-grey">Rules</div>
      <div className="text-page__text text-grey">
        <p>
          <b>Read carefully - </b>
          To keep things fair for all, we have Important conditions that users
          need to follow to take part in our game. Anyone not complying may lose
          the right to access and/or use www.melobeem.com. Remember that user
          activity is traceable and not anonymous. Online actions may have
          offline consequences. We may take legal action in serious cases of
          deliberate abuse of the processes or attempts at fraud including our
          cooperation with law enforcement agencies, banking and other
          authorities.
        </p>

        <h4>Game Details</h4>

        <p>
          <b>Competition length and dates</b>
        </p>

        <p>
          The current competition start date is {firstDay} and it ends on{" "}
          {lastDay}.
        </p>

        <p>
          <b>Users</b>
        </p>

        <p>
          To use the website fully, you must be logged in. We use Facebooks
          authentication for this. Once logged in you can access the additional
          features, enter and vote.
        </p>

        <h4>Entry Requirements</h4>

        <p>To enter the competition you must:</p>

        <ul>
          <li>
            be a registered member of the Melobeem website (www.Melobeem.com) be
            logged into your Facebook account to enter your child&apos;s details
            on the Entry form, providing the first and last name of your entry
            and gender.
          </li>
          <li>Upload a photo to the website.</li>
          <li>
            By uploading a photo you confirm that you have read and agree to our
            Terms & Conditions and your child&apos;s profile will be available
            to view online. All submissions for entries to the Melobeem game
            must be supported by explicit permission of a parent or guardian
            over 18 years of age of that child to allow reproduction of the
            image on the website and in any marketing.
          </li>
          <li>
            Entrants must hold all rights for visual content uploaded as image
            owner (parent/guardian) or by holding written consent provided to
            you by the owner (eg: a professional photographer).
          </li>
          <li>
            All entrants must be under four years old on the date they are
            entered.
          </li>
          <li>
            Entrants must ensure minors are clothed appropriately in any
            photographs provided.
          </li>
          <li>
            No entry may contain defamatory or offensive content, including but
            not limited to, images, words or symbols that are widely viewed as
            offensive to persons of a certain ethnic, religious, racial, sexual
            - orientated or socioeconomic group.
          </li>
          <li>
            Only one entry per person per competition is permitted. We reserve
            the right to remove any entries that have duplicate profiles.
          </li>
          <li>
            Only electronic entry forms received by enter page the closing date
            will be submitted to the competition. Melobeem shall be under no
            obligation to include any entry in the competition and shall incur
            no liability at any time for anything.
          </li>
          <li>
            Images submitted to the Melobeem Competition may be submitted only
            in the following file formats: jpg, gif or png and must not exceed
            size of 10MB.
          </li>
          <li>
            The winner will need to have a PayPal account in order to receive
            the cash prize.
          </li>
        </ul>

        <h4>Your Entry</h4>

        <ul>
          <li>
            Entrants agree that photos entered may appear on the Melobeem
            website, on its social media accounts and any promotional activity
            that Melobeem carry out.
          </li>
          <li>
            Entrants assign Melobeem the right to alter red eye, contrast and
            brightness on any photos submitted.
          </li>
          <li>
            Any material created by or on behalf of Melobeem utilising your
            submission material or any part thereof is and shall remain the
            property of Melobeem but for clarity you retain ownership of your
            submission material. Melobeem have the right to use the content, if
            they choose to do so. This will normally be in the form of first
            name, age and place of residence.( E.g. Tom, aged 14 months from
            London, and entry image). Each participant in the competition
            authorises that his / her entry name name and photograph can be
            published on the Melobeem site and social media platforms. By
            registering and entering (including voting in) registering ,entering
            ,or voting in the Melobeem promotion, you are consenting to the use
            of your information (including address, where collected, and e-mail)
            being used for future correspondence, by e-mail or post from
            Melobeem.
          </li>
          <li>
            You, the user, may contact us if you: 1). want to confirm the
            accuracy of the personal information we have collected about you;
            2). would like to update your personal information or delete your
            personal information; and/or 3). have any complaint regarding our
            use of your personal information. If requested, in relation to the
            information we hold, we will change any information you have
            provided to us or mark any information to prohibit future use,
            provided that you provide evidence as we may reasonably require for
            such changes.
          </li>
          <li>
            By posting any content or submitting any material you are agreeing
            to accept the competition rules and the Terms of Use and that you
            agree to be bound by them. If you do not wish to be bound by the
            rules or Terms of Use then you should not post any content or submit
            any such material.
          </li>
        </ul>

        <h4>The Winner & the Prize</h4>

        <ul>
          <li>There is no cash alternative to any none cash prize.</li>
          <li>
            The winner may be asked by Melobeem to provide specified documents
            to prove identity and parental/guardianship of the child that has
            been entered in the competition. Failure to provide such information
            may affect the entrant’s eligibility to participate or claim a prize
          </li>
          <li>
            Melobeem will aim to post the named winner(s) on the website no
            later than one week after the closing date. No correspondence will
            be entered into with other entrants. Melobeem reserves the right, at
            its sole discretion, to disqualify any entry. This will not normally
            occur unless we have reasonable grounds to believe an entry has
            breached any of the competition terms.
          </li>
          <li>The winner will be notified via by email.</li>
          <li>
            Employees (and their relatives) of Melobeem and its partner
            companies are excluded from entering the competition.
          </li>
          <li>
            Melobeem will endeavour to deliver the prize at a mutually
            convenient time to be agreed upon between the winners and the prize
            provider. A winner, as a condition of prize acceptance, may be asked
            to take part in a small scale promotional activity or advertising
            organised by Melobeem or it&apos;s partners.
          </li>
        </ul>

        <p>
          <b>Terms of use / Rules</b>
        </p>

        <ul>
          <li>
            These Rules are here to help you understand what you can and
            can&apos;t do as a member of our online community and user of the
            Melobeem game and any other interactive parts of the
            www.Melobeem.com website (&quot;Website&quot;).
          </li>
          <li>
            You agree that you own or otherwise control all of the rights to the
            content that you post at the date the content or material is
            submitted to the website: (i) the content and material is accurate;
            (ii) use of the content and material you supply does not breach any
            applicable policies or guidelines outlined by the website owner;
            (iii) any comments posted will not have any effect on the outcome of
            the game.
          </li>
        </ul>

        <p>
          If you do post any content or submit material, you irrevocably and
          unconditionally waive any moral rights or performers&apos; rights that
          you may have or may acquire in relation to any such content or
          material. If you delete your entry or Melobeem deletes your entry for
          violating any of our terms of use you will not be reimbursed for funds
          or time spent on the entry during the period which it was live.
        </p>

        <p>
          Users of the website may vote for an entry by clicking the vote button
          on an individual&apos;s entry provided they comply with the
          competition rules. Users found to be doing any of the three points
          below will be considered to be cheating and will be eliminated from
          the competition as soon as identified with no refunds for purchases
          made given to the banned user or anybody who voted for their entry.
        </p>

        <ul>
          <li>
            Participants found to have acquired a high number of votes via vote
            exchange websites / groups or proxy server.
          </li>
          <li>
            found to be creating multiple Facebook accounts to vote for an entry
          </li>
          <li>
            found to have been using vote farms, or purchased votes externally
            to this website
          </li>
          <li>using vote exchange websites/groups</li>
          <li>
            Users of the website may post comments or &apos;like&apos; an entry
            in accordance with the game provided such comments /content is not,
            in the opinion of Melobeem, illegal, obscene, abusive, threatening,
            defamatory, invasive of privacy, infringing of intellectual property
            rights, or otherwise injurious to third parties, or objectionable
            and does not consist of or contain software viruses, political
            campaigning, chain letters, mass mailings, commercial solicitation,
            or any form of &apos;spam&apos;. Users may not use a false email
            address, impersonate any person or entity, or otherwise mislead as
            to the origin of anything posted.Breaches of these conditions may
            result in users being barred from further involvement in the game.
            Comments posted by an user will not have any effect on the
            competition outcome.
          </li>
          <li>
            Because www.melobeem.com hosts many thousands of happy users &
            comments, it is not always practicable for us to be aware of each
            and every comment published. We will of course endeavour to monitor
            comments regularly. However, should one breach aforementioned
            guidelines and policies, there is an opportunity for users to
            utilise the Report button, which may appear on every entrant&apos;s
            page. You can alternatively email the support team. The Melobeem
            team operate on a &quot;notice and takedown&quot; basis. If you
            believe that any content on the website contains a defamatory
            statement, please notify us immediately by using the Report button
            or via the support email support@pandere.io. Once reported Melobeem
            will make reasonable endeavours to investigate and assess the
            reported content within a reasonable time and remove as appropriate.
          </li>
          <li>
            Once users have successfully purchased any products through our
            website via one of our payment processors (PayPal, Stripe), they
            agree to not claim these back by chargeback process. Failure to
            comply with this will result in a ban and possible further legal or
            administrative action. If there has been a genuine, inappropriate
            payment or error then that should be declared for consideration by
            the Melobeem support inbox support@pandere.io for refund.
          </li>
          <li>
            You agree that under no circumstances will Melobeem or its holding
            company be responsible or liable to you or any other person or
            entity for any direct, indirect consequential loss or damage arising
            out of or in connection with its operations (including, but not
            limited to, the use of photos or competition prizes), the ability to
            use this service or the alteration to or the transmission of any
            data. Nothing in these terms affects the statutory rights of any
            entrant under English law or excludes or limits the liability for
            death or personal injury arising from negligence or other liability
            which cannot be excluded or limited under English law.You may not
            systematically extract and/or re-utilise parts of the contents of
            the website without Melobeems express written consent. In
            particular, you may not utilise any data mining, robots, or similar
            data gathering and extraction tools to extract (whether once or many
            times) for re-utilisation of any parts of this website, without
            Melobeems express written consent.
          </li>
          <li>
            Copyright: This Website and its contents are copyright of Pandere.
            All rights reserved. Reproduction of all or any substantial part of
            the contents in any form is prohibited. No part of the site may be
            distributed or copied for any commercial purpose without express
            written consent.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
