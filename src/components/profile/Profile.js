import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';


export const Profile=({userData})=>{
    return<ProfileCard>
    <Description>
      <Avatar src={userData.avatar} alt="User avatar" />
      <Name>{userData.username}</Name>
      <Tag>@{userData.tag}</Tag>
      <Location>{userData.location}</Location>
    </Description>

    <StatsList>
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{userData.stats.followers}</Quantity>
      </StatsItem>

      <StatsItem>
        <Label>Views</Label>
        <Quantity>{userData.stats.views}</Quantity>
      </StatsItem>

      <StatsItem>
        <Label>Likes</Label>
        <Quantity>{userData.stats.likes}</Quantity>
      </StatsItem>
    </StatsList>
  </ProfileCard>
    
    
    /*<div class="profile">
    <div class="description">
      <img
        src={userData.avatar}
        alt="User avatar"
        class="avatar"
      />
      <p class="name">{userData.username}</p>
      <p class="tag">{userData.tag}</p>
      <p class="location">{userData.location}</p>
    </div>
  
    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{userData.stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{userData.stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{userData.stats.likes}</span>
      </li>
    </ul>
  </div>*/
    
    
    
};